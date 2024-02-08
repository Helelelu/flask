# flask
Pag maglalagay kayo ng css sa static folder dapat
Pati mga pics or vids or js script dun rin may sarili silang folder
Tapos mga html dun sa templates ilagay
Tapos i route ninyo sa app.py kopyahin nyo nalang yung mga app.route dun

example sa app.py
@app.route('/route_name')
def route_name():
    return render_template('example.html')

yung route_name kahit ano yun basta parehas sila nung sa def
wag ring gagamit ng - kasi di nababasa ng flask special func ata
