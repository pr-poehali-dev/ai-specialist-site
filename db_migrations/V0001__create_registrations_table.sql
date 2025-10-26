CREATE TABLE IF NOT EXISTS registrations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    user_agent TEXT
);

CREATE INDEX idx_registrations_email ON registrations(email);
CREATE INDEX idx_registrations_created_at ON registrations(created_at DESC);

COMMENT ON TABLE registrations IS 'Таблица для хранения заявок с формы регистрации';
COMMENT ON COLUMN registrations.id IS 'Уникальный идентификатор заявки';
COMMENT ON COLUMN registrations.name IS 'Имя клиента';
COMMENT ON COLUMN registrations.email IS 'Email клиента';
COMMENT ON COLUMN registrations.phone IS 'Телефон клиента';
COMMENT ON COLUMN registrations.company IS 'Название компании';
COMMENT ON COLUMN registrations.message IS 'Сообщение от клиента';
COMMENT ON COLUMN registrations.created_at IS 'Дата и время создания заявки';
COMMENT ON COLUMN registrations.ip_address IS 'IP адрес клиента';
COMMENT ON COLUMN registrations.user_agent IS 'User Agent браузера клиента';
