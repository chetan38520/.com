# from flask import Flask, request, render_template
# import smtplib
# from email.mime.text import MIMEText
# from email.mime.multipart import MIMEMultipart

# app = Flask(__name__)

# @app.route("/")
# def home():
#     return render_template("index.html")

# @app.route("/send", methods=["POST"])
# def send_email():
#     name = request.form["name"]
#     sender_email = request.form["email"]
#     message = request.form["message"]

#     # Email details
#     receiver_email = "chetan.k.kumar05@gmail.com"  # 👈 yahi inbox me mails aayenge
#     subject = f"New Message from {name}"

#     # Compose email
#     msg = MIMEMultipart()
#     msg["From"] = "chetan.k.kumar05@gmail.com"   # 👈 apna Gmail (App Password wala)
#     msg["To"] = receiver_email
#     msg["Subject"] = subject
#     msg["Reply-To"] = sender_email              # 👈 reply karne pe user ke email par jayega

#     body = f"Name: {name}\nEmail: {sender_email}\n\nMessage:\n{message}"
#     msg.attach(MIMEText(body, "plain"))

#     # Send email using Gmail SMTP
#     try:
#         server = smtplib.SMTP("smtp.gmail.com", 587)
#         server.starttls()
#         server.login("chetan.k.kumar05@gmail.com", "egbw pntb vpqb ozsk")  # 👈 App Password
#         server.sendmail("chetan.k.kumar05@gmail.com", receiver_email, msg.as_string())
#         server.quit()
#         return "✅ Message sent successfully!"
#     except Exception as e:
#         return f"❌ Error: {str(e)}"

# if __name__ == "__main__":
#     app.run(debug=True)


from flask import Flask, request, render_template
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/send", methods=["POST"])
def send_email():
    try:
        name = request.form.get("name")
        sender_email = request.form.get("email")
        subject = request.form.get("subject")
        message = request.form.get("message")

        # print("DEBUG FORM DATA ----")
        # print("Name:", name)
        # print("Email:", sender_email)
        # print("Subject:", subject)
        # print("Message:", message)

        # Default subject if empty
        if not subject or subject.strip() == "":
            subject = f"New Message from {name}"

        # Compose email
        msg = MIMEMultipart()
        msg["From"] = "chetan.k.kumar05@gmail.com"
        msg["To"] = "chetan.k.kumar05@gmail.com"
        msg["Subject"] = subject
        msg["Reply-To"] = sender_email

        body = f"""
You have received a new message from your portfolio contact form.

Name: {name}
Email: {sender_email}
Subject: {subject}

Message:
{message}
"""
        msg.attach(MIMEText(body, "plain"))

        # Send email using Gmail SMTP
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login("chetan.k.kumar05@gmail.com", "egbw pntb vpqb ozsk")  # 👈 your app password
        server.sendmail("chetan.k.kumar05@gmail.com", "chetan.k.kumar05@gmail.com", msg.as_string())
        server.quit()

        return "✅ Message sent successfully!"

    except Exception as e:
        print("ERROR:", str(e))
        return f"❌ Error: {str(e)}"


if __name__ == "__main__":
    app.run(debug=True)
