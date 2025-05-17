from flask import Flask, request, redirect, render_template
from werkzeug.utils import secure_filename
from pymongo import MongoClient
import os

app = Flask(__name__)

# 设置上传文件的保存路径
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# 上传文件限制
app.config['MAX_CONTENT_LENGTH'] = 5 * 1024 * 1024  

#连接数据库
client = MongoClient("mongodb+srv://sunxuan:kizunaai@cluster0.h6ecibg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = client["Dare_To_Truth"]
job_applications = db["applications"]
signupemail = db["signupemail"]

@app.route('/application_form', methods=['POST'])
def application_form():
  
    #暂时找不到对应的变量名，就先拿这些代替吧
    full_name = request.form.get('fullName')
    email = request.form.get('email')
    phone = request.form.get('phone')
    portfolio = request.form.get('portfolio')
    github = request.form.get('github')
    yearsExperience = request.form.get('yearsExperience')
    coverLetter = request.form.get('coverLetter')

    file = request.files['cv']
    if file:
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
    else:
        return "No file uploaded"

    job_applications.insert_one({
        "full_name": full_name,
        "email": email,
        "phone": phone,
        "portfolio": portfolio,
        "github": github,
        "yearsExperience": yearsExperience,
        "coverLetter": coverLetter,
        "resume_path": filepath
    })
    
    #也可以写成下面这种格式，跳转到特定网页
    #return render_template("xxxx.html")
    return "Upload Succeed"


@app.route('/signupemail', methods=['POST'])
def signupemail():

    
    #网页里面不貌似没有对email设置“name”属性，我就暂时先设置为'sign_up_email了
    sign_up_email = request.form.get('sign_up_email')
    signupemail.insert_one({
        "sign_up_email": sign_up_email
    })
    
    #类似与上一个函数
    return "Email Sign Up"  



if __name__ == '__main__':
    app.run(debug=True)
