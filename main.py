# This file contains the flask app
from flask import Flask, request, make_response, render_template, jsonify

app = Flask(__name__)

@app.route('/'):
def index():
	pass



if __name__ == '__main__':
	app.run(debug=True) # http://localhost:5000
