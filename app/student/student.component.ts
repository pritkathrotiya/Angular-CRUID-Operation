import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  index=null;
  view=null;
  
  tempVar={
    tempName:"",tempNumber:"",tempCollage:"",
    tempPhoneno:"",tempEmail:"",
    tempCountry:"",tempState:"",tempCity:"",tempAddress:"",
    tempDob:"",tempAge:"",tempGendar:"",
    tempSpi:"",tempCpi:"",tempBg:"",
  };
  seeStudent={
    viewName:"",viewNumber:"",viewCollage:"",
    viewPhoneno:"",viewEmail:"",
    viewCountry:"",viewState:"",viewCity:"",viewAddress:"",
    viewDob:"",viewAge:"",viewGendar:"",
    viewSpi:"",viewCpi:"",viewBg:"",
  };
  studentArray=[
    { name:"ABC",number:"123456789012",collage:"PQR",
    phoneno:"1234567890",email:"abc@gmail.com",
    country:"India",state:"Gujarat",city:"Rajkot",address:"84-XYZ",
    dob:"10/10/2000",age:"20",gendar:"Male",
    spi:"9.25",cpi:"8.00",bg:"0", },
  ];

  addStudent(){
    let tempStudent = { 
      name:this.tempVar.tempName,number:this.tempVar.tempNumber,collage:this.tempVar.tempCollage,
      phoneno:this.tempVar.tempPhoneno,email:this.tempVar.tempEmail,
      country:this.tempVar.tempCountry,state:this.tempVar.tempState,city:this.tempVar.tempCity,address:this.tempVar.tempAddress,
      dob:this.tempVar.tempDob,age:this.tempVar.tempAge,gendar:this.tempVar.tempGendar,
      spi:this.tempVar.tempSpi,cpi:this.tempVar.tempCpi,bg:this.tempVar.tempBg,
    };
    this.studentArray.push(tempStudent);
    this.tempVar={
      tempName:"",tempNumber:"",tempCollage:"",
      tempPhoneno:"",tempEmail:"",
      tempCountry:"",tempState:"",tempCity:"",tempAddress:"",
      tempDob:"",tempAge:"",tempGendar:"",
      tempSpi:"",tempCpi:"",tempBg:"",
    }
  }

  deleteStudent(i){
    this.studentArray.splice(i,1);
  }

  selectStudent(i){
    this.index=i;
    this.tempVar.tempName=this.studentArray[i].name;
    this.tempVar.tempNumber=this.studentArray[i].number;
    this.tempVar.tempCollage=this.studentArray[i].collage;
    this.tempVar.tempPhoneno=this.studentArray[i].phoneno;
    this.tempVar.tempEmail=this.studentArray[i].email;
    this.tempVar.tempCountry=this.studentArray[i].country;
    this.tempVar.tempState=this.studentArray[i].state;
    this.tempVar.tempCity=this.studentArray[i].city;
    this.tempVar.tempAddress=this.studentArray[i].address;
    this.tempVar.tempDob=this.studentArray[i].dob;
    this.tempVar.tempAge=this.studentArray[i].age;
    this.tempVar.tempGendar=this.studentArray[i].gendar;
    this.tempVar.tempSpi=this.studentArray[i].spi;
    this.tempVar.tempCpi=this.studentArray[i].cpi;
    this.tempVar.tempBg=this.studentArray[i].bg;
  }

  updateStudent(){
    this.studentArray[this.index].name=this.tempVar.tempName;
    this.studentArray[this.index].number=this.tempVar.tempNumber;
    this.studentArray[this.index].collage=this.tempVar.tempCollage;
    this.studentArray[this.index].phoneno=this.tempVar.tempPhoneno;
    this.studentArray[this.index].country=this.tempVar.tempEmail;
    this.studentArray[this.index].state=this.tempVar.tempCountry;
    this.studentArray[this.index].city=this.tempVar.tempCity;
    this.studentArray[this.index].address=this.tempVar.tempAddress;
    this.studentArray[this.index].dob=this.tempVar.tempDob;
    this.studentArray[this.index].age=this.tempVar.tempAge;
    this.studentArray[this.index].gendar=this.tempVar.tempGendar;
    this.studentArray[this.index].spi=this.tempVar.tempSpi;
    this.studentArray[this.index].cpi=this.tempVar.tempCpi;
    this.studentArray[this.index].bg=this.tempVar.tempBg;
    this.index=null;
    this.tempVar={
      tempName:"",tempNumber:"",tempCollage:"",
      tempPhoneno:"",tempEmail:"",
      tempCountry:"",tempState:"",tempCity:"",tempAddress:"",
      tempDob:"",tempAge:"",tempGendar:"",
      tempSpi:"",tempCpi:"",tempBg:"",
    }
  }
  
  viewStudent(i){
    this.view=i;
    this.seeStudent.viewName=this.studentArray[this.view].name;
    this.seeStudent.viewNumber=this.studentArray[this.view].number;
    this.seeStudent.viewCollage=this.studentArray[this.view].collage;
    this.seeStudent.viewPhoneno=this.studentArray[this.view].phoneno;
    this.seeStudent.viewEmail=this.studentArray[this.view].email;
    this.seeStudent.viewCountry=this.studentArray[this.view].country;
    this.seeStudent.viewState=this.studentArray[this.view].state;
    this.seeStudent.viewCity=this.studentArray[this.view].city;
    this.seeStudent.viewAddress=this.studentArray[this.view].address;
    this.seeStudent.viewDob=this.studentArray[this.view].dob;
    this.seeStudent.viewAge=this.studentArray[this.view].age;
    this.seeStudent.viewGendar=this.studentArray[this.view].gendar;
    this.seeStudent.viewSpi=this.studentArray[this.view].spi;
    this.seeStudent.viewCpi=this.studentArray[this.view].cpi;
    this.seeStudent.viewBg=this.studentArray[this.view].bg;
  }

  removeStudent(){
    this.view=null;
  }
}
