var HospitalModel = 
{
    Hospital_Details : 
        {
              Name : "Nalash Hospitals",
              Establish : 1998,
              Register_No : 4514302,
              Address : "30 A , South Street , Tenkasi - 627811",
              Contact_No : 9841364921,
              Mail_Id  :"nalashhospitals@gmail.com"
        },

    Department :
        [
             "Outpatient Ward" ,"Neurology" , "Cardiology" ,"Gynecology"
        ] ,
        
    Staffs :
        [
             "Doctor","Nurse", "Other Staffs"
        ],

    Doctors :
    {
    Doctors_details :
            [
              Name = " Kayal",
              Specialist = " Gynecology",
              Qualification = "M.B.B.S,M.D",
              Age = 28,
              ID_No = NH123,
              Experience = "4 years" ,
              Duty_Time = "6 p.m to 9 p.m",
              Contact_No = 8657129643,
              Patient_Count = 6 ,
              Nurse_Name = "Jothi" 

            ],
            [ Name = "Kavitha",
              Specialist = "Neurology",
              Qualification = "M.B.B.S,M.D",
              Age = 32,
              ID_No = NH123,
              Experience = "6 years" ,
              Duty_Time = "11 a.m to 2 p.m",
              Contact_No = 8657129643,
              Patient_count = 5 ,
              Nurse_Name = "Pavithra",
        
            ],

        },
         

    Nurse :
        
        {
         Nurse_Name = [ 
              Name ="Jothi",
              Qualification = "B.Sc, M.Sc(Nursing)",
              Age = 42, 
              Experience = "12 years" ,
              ID_No = N26,
              Duty_Time = "7 a.m to 5 p.m",
              Nurse_details(ID_No,Nurse_name)
            ]
            [
              Name ="Pavithra",
              Qualification = "B.Sc(Nursing)",
              Age = 37, 
              Experience = "9 years" ,
              ID_No = N28,
              Duty_Time = "8 p.m to 6 a.m",
              Nurse_details(ID_No,Nurse_name)
            ]

        },

    Other_Staffs : 
    
        {
            [
              Name = "Manu",
              ID_No = NR102 ,
              Designation ="Receptionist",
              Age = 25,
              Contact_No = 8012197713
            ]
            [
              Name = "Indu",
              ID_No = NL043 ,
              Designation ="Lab_assistant",
              Age = 26,
              Contact_No = 8058953105
            ]
            [
              Name = "Sankar",
              ID_No = ND233 ,
              Designation ="Driver",
              Age = 30,
              Contact_No = 9787358363
            ]
        },
    
    Rooms : 
    
        [
             "Operation Theatre","Scanning Center" ,"Patient Room" ,"Consultant Room"
        ],
    
    Operation_Theatre : ["Cardiology" ,"Gynecology" ,"Neurology"],
       
      Room:  {
              Room_Type = "Gynecology",
              Bed_No = 12,
              Equipments = ["Needle" ,"Thread" ,"Monitor" , "Oxygen_Cylinder" ,"Anesthesia" ,"Scissors" ,"Injection"]
        },
    
    Scanning_Center : ["ECHO" ,"MRI" ,"ECG", "Ultrasound"],
    
        Room:{ 
              Room_Type = "ECHO",
              Bed = 2,
              Equipments = ["Gel", "Heartbeat_rate" , "Monitor"]
        },
    
    Patient_Room : 
    
        {
              Bed = 1,
              Chair = 1,
              Trips_Stand = 1,
              Medical_Stand = 1
        },
    
    Consultant_Room :
    
        { 
              Chair = 1,
              Bed = 1,
              Equipments = ["Stethoscope" , "Torch Light"]
        },
    
    Patient : 
    
        [
              "In patient" , "Out patient" 
        ],
    
    In_patient =
    
       {
              Patient_Name : "Sakthi",
              Bed_No = 8,
              ID_No = 22 ,
              Age = 25,
              Contact_No = 9281623457,
              Issue = "Delivery",
              BP = 121/80 ,
              Weight = "54 kg" ,
              Height = "171 cm" ,
              Blood_group = "A1 +ve",
              Handling_Doctor = "Kayal",
              Incharge_Nurse = "Jothi" ,
              X_Ray = "Scan" , 
              Visitors_Time = "5 p.m to 6 p.m",
              patient_checkup_details(ID_No, Patient_name)
              
       },
    
    Out_patient :
    
        {
              Patient_Name : "Mahi",
              Age = 12, 
              Token_No = 24 ,
              Contact_No = 9443039753,
              Issue = "Fever",
              patient_checkup_details(Token_No, Patient_Name)
              
        },
    Pharmacy :
        {
              Staff_Name = "Kumar"
              ID_No = NP143 ,
              Medicine_Name = ["Paracetamol, Loparat , Sporlac "],
              Medicine_details(Med_name)
        },
    
    Equipments :
    
       [
             "Ambulance","Stretcher","Table","Operating Things","Light","Furnitures" 
        ]
    
}