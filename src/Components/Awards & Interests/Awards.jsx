import "./Awards.css"
import styled from "styled-components";

const Awards =()=>{
    return(

        <div className="Awardsinterest" id="awards" >
                 <div className="awrint_main">
            <div className="Awards">
                <p className="awrd1">Awards</p>
<p className="awrd2">WHERE I SHINE</p>
<br/>
<Table>
<table style={{width:"39rem"}}>
  <tr>
    <td>Best Performance Award of the year 2023</td>
   
  </tr>
  <tr>
    <td>Bravo Award 2023</td>
 
  </tr>
  <tr>
    <td>Pat on the back Award 2023</td>
  
  </tr>
  <tr>
    <td>Vault content hub Award 2022</td>
  
  </tr>
</table>
</Table>
            </div>
            <div className="interest">
<p className="intr1">Interests</p>
<p className="intr2">OUT OF OFFICE</p>
<br/>
<Table>
<table style={{width:"29rem"}}>
  <tr>
    <td>Reading Books</td>
    <td>Learning New Skills</td>

  </tr>
  <tr>
    <td>Playing games</td>
    <td>Listening Music</td>
    
  </tr>
  <tr>
    <td>Cooking</td>
    <td>Exercise</td>
   
 
  </tr>

</table>
</Table>

            </div>
            </div>
        </div>
    );
}

export default Awards;

const Table = styled.div`
line-height: 47px;

    font-size: 18px;
    color: #224e6f;
    text-align: start;

    letter-spacing: 2px;

    font-family: "FuturaBQ-LightOblique" !important;
    font-weight: 500;
    font-size: 21px!important;

`;