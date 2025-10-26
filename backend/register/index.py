import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from datetime import datetime

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Process registration form and send email notification
    Args: event - dict with httpMethod, body, queryStringParameters
          context - object with attributes: request_id, function_name
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    name = body_data.get('name', '')
    email = body_data.get('email', '')
    phone = body_data.get('phone', '')
    company = body_data.get('company', '')
    message = body_data.get('message', '')
    
    if not name or not email:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Имя и email обязательны'})
        }
    
    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    recipient_email = os.environ.get('RECIPIENT_EMAIL')
    
    if not all([smtp_host, smtp_user, smtp_password, recipient_email]):
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Email настройки не заданы'})
        }
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая регистрация: {name}'
    msg['From'] = smtp_user
    msg['To'] = recipient_email
    
    html_content = f'''
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
          <h2 style="color: #0066cc; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
            Новая заявка на регистрацию
          </h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <p><strong style="color: #555;">Имя:</strong> {name}</p>
            <p><strong style="color: #555;">Email:</strong> <a href="mailto:{email}">{email}</a></p>
            {f'<p><strong style="color: #555;">Телефон:</strong> {phone}</p>' if phone else ''}
            {f'<p><strong style="color: #555;">Компания:</strong> {company}</p>' if company else ''}
            {f'<p><strong style="color: #555;">Сообщение:</strong><br/>{message}</p>' if message else ''}
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-left: 4px solid #0066cc; border-radius: 3px;">
            <p style="margin: 0; font-size: 12px; color: #666;">
              <strong>Дата:</strong> {datetime.now().strftime('%d.%m.%Y %H:%M')}
            </p>
          </div>
        </div>
      </body>
    </html>
    '''
    
    msg.attach(MIMEText(html_content, 'html', 'utf-8'))
    
    try:
        if smtp_port == 465:
            server = smtplib.SMTP_SSL(smtp_host, smtp_port)
        else:
            server = smtplib.SMTP(smtp_host, smtp_port)
            server.starttls()
        
        server.login(smtp_user, smtp_password)
        server.send_message(msg)
        server.quit()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно отправлена'
            })
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': False,
                'error': f'Ошибка отправки: {str(e)}'
            })
        }
