from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson import json_util, ObjectId

app = Flask(__name__)
CORS(app)

# setup mongodb connection
uri = "mongodb+srv://frankyshi:waterfirerule@cluster0.mlgqdse.mongodb.net/Data?retryWrites=true&w=majority&appName=Cluster0"
app.config['MONGO_URI'] = uri # go to Data db from mongodb connection
mongo = PyMongo(app)
tasks = mongo.db.tasks # get the Data.tasks collection

# SCHEMA:
# schema = {
#     "_id": obj id,
#     "title": str,
#     "priority": str, [Low, Medium, High]
#     "status": str, [Not started, Pending, Finished]
#     "due": str,
#     "desc": str,
#     "create": str
# }

# get specified tasks
@app.route('/tasks', methods=['GET'])
def get_tasklist():
    priority_val = request.args.get('priority')
    status_val = request.args.get('status')

    if priority_val == None or priority_val == 'None':
        priority_val = {'$exists': True}
    if status_val == None or status_val == 'None':
        status_val = {'$exists': True}

    filter_query = {
        'priority': priority_val,
        'status': status_val
    }
    print(filter_query)

    try:
        # get documents (bson) and turn into json
        tasklist = list(tasks.find(filter_query))
        tasklist_json = json_util.dumps(tasklist)
        return tasklist_json
    except Exception as e:
        print('error getting tasks: ', e)
    return 'get'

@app.route('/tasks', methods=['POST'])
def add_data():
    # get new task data from frontend and add it to db
    new_task = request.json
    try:
        tasks.insert_one(new_task)
        print("task inserted successfully")
    except Exception as e:
        print("error inserting task: ", e)
    return 'add'

@app.route('/tasks/<task_id>', methods=['PUT'])
def edit_data(task_id):
    update_json = {"$set": request.json}
    try:
        tasks.update_one({"_id": ObjectId(task_id)}, update_json)
        print("task edited successfully")
    except Exception as e:
        print("error editing task: ", e)
    return 'edit'

@app.route('/tasks/<task_id>', methods=['DELETE'])
def delete_data(task_id):
    try:
        tasks.delete_one({"_id": ObjectId(task_id)})
        print("task deleted successfully")
    except Exception as e:
        print("error deleting task: ", e)
    return 'delete'

if __name__ == '__main__':
    app.run(debug=True)