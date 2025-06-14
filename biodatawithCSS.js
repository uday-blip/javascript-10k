console.log(document);
document.body.style.backgroundColor="#F0F8FF"
let heading=document.createElement("h1")
heading.textContent="My bio data";
heading.style.textAlign="center"
heading.style.backgroundColor="#89CFF0"
heading.style.color="white"
let my_name=document.createElement("h4")
my_name.textContent="Name :Doddavarapu Uday"
my_name.style.fontSize="25px"
my_name.style.fontStyle="italic";
let Dob_label=document.createElement("h3")
Dob_label.textContent="My Date of Birth"
let Dob=document.createElement("input");
Dob.style.color="#FF5F15"
Dob.type="date";
Dob.value="2003-02-23"
Dob.textContent=`My Date of birth: ${Dob}`
let breaked=document.createElement("br");
let gen_des=document.createElement("h3")
gen_des.textContent="Gender"
gen_des.style.cursor="pointer"
let gender=document.createElement("input")
gender.style.cursor="pointer"
gender.name="gender";
gender.value="male";
gender.type="radio";
gender.id="male";
let label_gender=document.createElement("label")
label_gender.textContent="male";
let des_nationality=document.createElement("h3")
des_nationality.textContent="Nationality"
des_nationality.style.cursor="pointer"
let nationality=document.createElement("input")
nationality.style.cursor="pointer"
nationality.type="checkbox";
nationality.value="indian";
nationality.id="nationality"
let label_nationality=document.createElement("label")
label_nationality.textContent="indian"
let des_address=document.createElement("h3")
des_address.textContent="Resdential address"
let address=document.createElement("p")
address.style.transition = "all 1s ease";
address.textContent="4-309/1 east godavari,andhrapradesh,india";
address.style.transform="scale(1)";
address.addEventListener('mouseenter',()=>{
    address.style.transform="scale(1.07) translateX(50px)";
});
address.addEventListener('mouseleave',()=>{
    address.style.transform="scale(1) translateX(0px)";
});
document.body.append(heading,
    my_name,
    Dob_label,
    Dob,
    breaked,
    gen_des,
    gender,
    label_gender,
    des_nationality,
    nationality,
    label_nationality,
    des_address,
    address
);
let sector_edu=document.createElement("h2")
sector_edu.textContent="Education details :"
sector_edu.style.cursor="pointer"
sector_edu.style.color="#E2725B"
sector_edu.style.fontStyle="italic";
let primary=document.createElement("h4")
primary.textContent="LKG to 7th :";
let des_primary=document.createElement("p")
des_primary.textContent="Sri vivekanada school"
let sec_school=document.createElement("h4")
sec_school.textContent="7th to SSC :";
let des_sec_school=document.createElement("p")
des_sec_school.textContent="Bhashayam: (9.8/10) ";
let inter=document.createElement("h4")
inter.textContent="Intermediate :";
let des_inter=document.createElement("p")
des_inter.textContent="Sri ravi teja : (832/1000)";
let graduation=document.createElement("h4")
graduation.textContent="Graduated from ,Branch , Year of passing out  ";
graduation.style.fontStyle="italic";
let des_graduation=document.createElement("P")
des_graduation.style.transition = "all 1s ease";
des_graduation.textContent="SKBR College ,B.sc Computer science, 2024";
des_graduation.style.color="skyblue"
address.style.transition = "all 1s ease";

des_graduation.style.transform="scale(1)";
address.addEventListener('mouseenter',()=>{
    des_graduation.style.transform="scale(1.07) translateX(50px)";
});
des_graduation.addEventListener('mouseleave',()=>{
    des_graduation.style.transform="scale(1) translateX(0px)";
});
let cgpa=document.createElement("P")
cgpa.textContent="CGPA: 8.3/10"
document.body.append(
    sector_edu,
    primary,
    des_primary,
    sec_school,
    des_sec_school,
    inter,
    des_inter,
    graduation,
    des_graduation,
    cgpa
)
let sec_contact=document.createElement("h3")
sec_contact.textContent="Contact info :";
let mobile=document.createElement("p")
mobile.textContent="mob no: +91 9346522711";
let github=document.createElement("a")
github.style.cursor="pointer";
github.textContent="Github link : Click here to see my github ";
github.href="https://github.com/uday-blip"
let broke=document.createElement("br")
let linkedin=document.createElement("a")
linkedin.style.cursor="pointer"
linkedin.textContent="Linkedin acc : Click here for linkedin account";
linkedin.href="www.linkedin.com/in/uday-doddavarapu-750a502b0"
let email=document.createElement("p")
email.textContent="email :'udayudayharry@gamil.com'"
email.style.cursor="pointer"
document.body.append(sec_contact,
                    mobile,
                    github,
                    broke,
                    linkedin,
                    email,

)
let sec_skills=document.createElement("h3")
sec_skills.textContent="Tech Skills :";
sec_skills.style.color="green"
sec_skills.style.fontStyle="italic";
let tech_skills=document.createElement("ol")
tech_skills.style.backgroundColor="#FFF0F5"
let skill_1=document.createElement("li")
skill_1.textContent="HTML";
let skill_2=document.createElement("li")
skill_2.textContent="CSS";
let skill_3=document.createElement("li")
skill_3.textContent="Python";
let skill_4=document.createElement("li")
skill_4.textContent="Sql";
let skill_5=document.createElement("li")
skill_5.textContent="JavaScript";
tech_skills.append(skill_1,skill_2,skill_3,skill_4,skill_5)

document.body.append(sec_skills,
                     tech_skills               
)
let soft_skills=document.createElement("h3")
soft_skills.textContent="soft skills :";
soft_skills.style.color="red"
let soft_list=document.createElement("ol")
soft_list.style.backgroundColor="#D8BFD8";
let c=document.createElement("li")
c.textContent="Communication";
let l=document.createElement("li")
l.textContent="Leadership";
let p=document.createElement("li")
p.textContent="Productive habits like book reading , finicial literacy ";
soft_list.append(c,l,p);
document.body.append(soft_skills,
                     soft_list
)
