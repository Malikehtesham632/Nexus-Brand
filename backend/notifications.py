import os
import smtplib
from email.message import EmailMessage

NOTIFY_EMAIL = os.getenv("NOTIFY_EMAIL", "")
SENDER_EMAIL = os.getenv("SENDER_EMAIL", "")
SENDER_APP_PASSWORD = os.getenv("SENDER_APP_PASSWORD", "")

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587


def send_contact_notification(name, email, message, form_type):
    if not SENDER_EMAIL or not SENDER_APP_PASSWORD or not NOTIFY_EMAIL:
        print("Email notification skipped: SMTP environment variables not set")
        return

    email_message = EmailMessage()
    email_message["From"] = SENDER_EMAIL
    email_message["To"] = NOTIFY_EMAIL
    email_message["Subject"] = f"New {form_type} submission from {name}"
    email_message.set_content(
        f"You received a new {form_type} form submission.\n\n"
        f"Name: {name}\n"
        f"Email: {email}\n"
        f"Message:\n{message}"
    )

    with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_APP_PASSWORD)
        server.send_message(email_message)
