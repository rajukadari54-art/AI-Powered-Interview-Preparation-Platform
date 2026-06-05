from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

questions = [
    "Explain the difference between Django and Flask?",
    "What is REST API?",
    "What is a Python dictionary?"
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/question')
def question():
    return jsonify({"question": questions[0]})

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json

    return jsonify({
        "score": 84,
        "message": "Interview Completed Successfully"
    })

if __name__ == '__main__':
    app.run(debug=True)