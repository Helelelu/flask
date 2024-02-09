from flask import Flask, render_template, request, redirect, url_for, flash, session
from werkzeug.security import generate_password_hash, check_password_hash
from flask_mysqldb import MySQL   
import MySQLdb.cursors
import re

app = Flask(__name__)

app.secret_key = 'your_secret_key'
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'whiteowl_users'

mysql = MySQL(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods =['GET', 'POST'])
def login():
    message = ''
    if request.method == 'POST' and 'email' in request.form and 'password' in request.form:
        email = request.form['email']
        password = request.form['password']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM user WHERE email = % s AND password = % s', (email, password, ))
        user = cursor.fetchone()
        if user:
            session['loggedin'] = True
            session['userid'] = user['userid']
            session['name'] = user['name']
            session['email'] = user['email']
            message = 'Logged in successfully !'
            return render_template('home.html', message = message)
        else:
            message = 'Please enter correct email / password !'
    return render_template('login.html', message = message)

@app.route('/signup', methods =['GET', 'POST'])
def signup():
    message = ''
    if request.method == 'POST' and 'name' in request.form and 'password' in request.form and 'email' in request.form :
        userName = request.form['name']
        password = request.form['password']
        email = request.form['email']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM user WHERE email = % s', (email, ))
        account = cursor.fetchone()
        if account:
            message = 'Account already exists!'
        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            message = 'Invalid email address!'
        elif not userName or not password or not email:
            message = 'Please fill out the form!'
        else:
            cursor.execute('INSERT INTO user VALUES (NULL, % s, % s, % s)', (userName, email, password, ))
            mysql.connection.commit()
            message = 'You have successfully registered!'
    elif request.method == 'POST':
        message = 'Please fill out the form!'
    return render_template('signup.html', message = message)

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
    return render_template('my-courses.html')

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
    return render_template('password.html')

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
    return render_template('activities.html')

@app.route('/act_css1')
def act_css1():
    return render_template('act_css1.html')

@app.route('/act_html1')
def act_html1():
    return render_template('act_html1.html')

@app.route('/act_jsl1')
def act_jsl1():
    return render_template('act_jsl1.html')

@app.route('/act_py1')
def act_py1():
    return render_template('act_py1.html')

@app.route('/act_java1')
def act_java1():
    return render_template('act_java1.html')

@app.route('/database_management')
def database_management():
    return render_template('database_management.html')

@app.route('/machine_learning')
def machine_learning():
    return render_template('machine_learning.html')


@app.route('/network_administration')
def network_administration():    
    return render_template('networking_administration.html')

@app.route('/cyber_security')
def cyber_security():
    return render_template('cyber_security.html')


@app.route('/project_management')
def project_management():
    return render_template('project_management.html')

@app.route('/quizcss')
def quizcss():
    return render_template('quizcss.html')

@app.route('/quizhtml')
def quizhtml():
    return render_template('quizhtml.html')

@app.route('/quizjava')
def quizjava():
    return render_template('quizjava.html')

@app.route('/quizpy')
def quizpy():
    return render_template('quizpy.html')

@app.route('/web_dev')
def web_dev():
    return render_template('web_dev.html')

@app.route('/quizjs')
def quizjs():
    return render_template('quizjs.html')

@app.route('/app_dev')
def app_dev():
    return render_template('app_dev.html')

@app.route('/java_course')
def java_course():
    return render_template('java.html')

@app.route('/javascript_course')
def javascript_course():
    return render_template('javascript.html')

@app.route('/html_course')
def html_course():
    return render_template('html.html')

@app.route('/css_course')
def css_course():
    return render_template('css.html')

@app.route('/python_course')
def python_course():
    return render_template('python.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/answer_forum')
def answer_forum():
    return render_template('answer-forum.html')

@app.route('/logout')
def logout():
    session.pop('loggedin', None)
    session.pop('userid', None)
    session.pop('email', None)
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)
