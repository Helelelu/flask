from flask import Flask, render_template, request, redirect, url_for, flash, session
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SECRET_KEY'] = 'your_secret_key'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/courses')
def courses():
    return render_template('courses.html')

@app.route('/coursedetail')
def coursedetail():
    return render_template('course-detail.html')

@app.route('/mycourses')
def mycourses():
    return render_template('wala-pa.html')

@app.route('/dashboard')
def dashboard():
    return render_template('wala-pa.html')

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/history')
def history():
    return render_template('history.html')

@app.route('/faq')
def faq():
    return render_template('faq.html')

@app.route('/help')
def help():
    return render_template('help.html')

@app.route('/pap')
def pap():
    return render_template('PAP.html')

@app.route('/password')
def password():
    return render_template('pass.html')

@app.route('/terms')
def terms():
    return render_template('TAC.html')

@app.route('/what_we_do')
def what_we_do():
    return render_template('WWD.html')

@app.route('/creators')
def creators():
    return render_template('creators.html')

@app.route('/edit')
def edit():
    return render_template('edit.html')

@app.route('/activities')
def activities():
    return render_template('activity-homepage.html')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
