async function studentdetail()
{
    let res=await fetch(`htth:\\F:\sample\result.json`);
    let results=await res.json();
    
    let student=await fetch(`http:\\F:\sample\students.json`);
    let studentdetails=await student.json();

    for(i=0;i<results.length;i++)
    {
        for(j=0;j<studentdetails.length;j++)
        {
            if(results[i].rollno===studentdetails[j].rollno)
               console.log(studentdetails[j])
        }
    }

}

studentdetail();