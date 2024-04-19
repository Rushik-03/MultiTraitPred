import React, { useState } from 'react'
import axios from 'axios';

const Predict = () => {

  const [data,setData] = useState('');
  const submitted = async(e)=>{
    var genotypeInput = document.getElementById("sequence").value;
            // Validate input length
    if (genotypeInput.length !== 48) {
      alert("Please enter exactly 48 characters.");
      return;
    }
    // Validate input characters
    var validCharacters = /^[ATGCatgc]*$/;
    if (!validCharacters.test(genotypeInput)) {
      alert("Invalid characters. Please use only A, T, G, C.");
      return;
    }
    // Map genotype to numbers
    var genoMap = {
      AA: 1,
      AT: 2,
      AG: 3,
      AC: 4,
      TT: 5,
      TG: 6,
      TC: 7,
      GG: 8,
      CG: 9,
      CC: 10,
    };
    //ATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCG
    // Convert genotype to numbers
    var numericGenotype = [];
    for (var i = 0; i < genotypeInput.length; i += 2) {
      var pair = genotypeInput.slice(i, i + 2).toUpperCase();
      numericGenotype.push(genoMap[pair]);
    }
    // console.log(numericGenotype);
    e.preventDefault();
    try{
      const response = await axios.post('http://127.0.0.1:5000/predict',{
        ip: numericGenotype 
      })
      console.log(response.data);
      if (response.data && response.data.preds) {
          var predictionResult = response.data.preds;
          var staticTraits = [
            "Days to Heading (DH)",
            "Grain Filling Duration (GFD)",
            "Grain Number per Spike (GNPS)",
            "Grain Weight per Spike (GWPS)",
            "Plant Height (PH)",
            "Grain Yield (GY)",
          ];
          // Update the table with prediction data
          var predictionTableBody = document.getElementById("predictionTableBody");
          predictionTableBody.innerHTML = ""; // Clear previous rows
  
          for (var i = 0; i < predictionResult.length; i++) {
            var row = predictionTableBody.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = staticTraits[i];
            cell2.innerHTML = predictionResult[i].toFixed(2);
          }
        } else {
          // Handle the case when "preds" key is missing in the data
          console.error(
            "Invalid data format. Missing 'preds' key."
          );
        }
    }
    catch{
      console.log(e);
    }

  }
  return (
    <>
    <div className='predd'>
      <div className='left-pred'>
        <div className="overall">
          <div className='terms' style={{color:'white'}}>
            <h3>Basic Meaning of ATGC:</h3>
            <h4>A - Adenine</h4>
            <h4>T - Thymine</h4>
            <h4>G - Guanine</h4>
            <h4>C - Cytosine</h4>
          </div>
          <br/>
          <div style={{color:'white'}}>
            <li style={{fontWeight: '50',fontSize: '1.2rem',letterSpacing:'0.5px'}}>Enter meaningfull alphabets only (ATGC).</li>
            <li style={{fontWeight: '50',fontSize: '1.2rem',letterSpacing:'0.5px'}}>Maintain the Relative order.</li>
            <li style={{fontWeight: '50',fontSize: '1.2rem',letterSpacing:'0.5px'}}>Enter exactly 48 characters.</li>
          </div>
          <br/>
        </div>
        <div className='submit'>
          <form>
            <h4 style={{color:'white',fontSize:'1.5rem',fontWeight:'150',letterSpacing:'0.6px'}}> Enter the input below:</h4>
            <input id='sequence' type='text' size="40" maxLength={"48"} placeholder='Enter you sequence' style={{color:'white',padding:'10px',fontSize:'1.1rem'}}></input>
            <br/>
            <br/>
            <button onClick={submitted} style={{color:'white',padding:'10px 30px 10px 30px ',fontSize:'1.1rem',background:'darkgreen',borderRadius:'15px'}} >Submit</button>
          </form>
        </div>
      </div>
    </div>
    <table class="table">
        <thead>
          <tr>
            <th>Trait</th>
            <th>Prediction</th>
          </tr>
        </thead>
        <tbody id="predictionTableBody"></tbody>
    </table>
    <h1 style={{color:'white',letterSpacing:'1.2px',fontWeight:'200',textAlign:'center'}}>SNP Information</h1>
    <div className='tables'>
      <div className='right-pred'>
        <table style={{width:'100%'}}>
          <tr>
            <th style={{letterSpacing:'1px',fontSize:'1.2rem',color:'green'}}>SNP</th>
            <th style={{letterSpacing:'1px',fontSize:'1.2rem',color:'green'}}>Position</th>
          </tr>
          <tr>
            <td>AX-94462858</td>
            <td>553146272</td>
          </tr>
          <tr>
            <td>AX-95071247</td>
            <td>143438568</td>
          </tr>
          <tr>
            <td>AX-94646188</td>
            <td>78343644</td>
          </tr>
          <tr>
            <td>AX-94776946</td>
            <td>647927975</td>
          </tr>
          <tr>
            <td>AX-94702181</td>
            <td>105412667</td>
          </tr>
          <tr>
            <td>AX-94477591</td>
            <td>635264767</td>
          </tr>
          <tr>
            <td>AX-94710748</td>
            <td>326464823</td>
          </tr>
          <tr>
            <td>AX-94440104</td>
            <td>59213510</td>
          </tr>
          <tr>
            <td>AX-94480569</td>
            <td>478555437</td>
          </tr>
          <tr>
            <td>AX-94524677</td>
            <td>514593813</td>
          </tr>
          <tr>
            <td>AX-94547219</td>
            <td>513572057</td>
          </tr>
          <tr>
            <td>AX-94670667	</td>
            <td>479876161</td>
          </tr>
        </table>
      </div>
      <div className='l-pred'>
        <table>
          <tr>
            <th style={{letterSpacing:'1px',fontSize:'1.2rem',color:'green'}}>SNP</th>
            <th style={{letterSpacing:'1px',fontSize:'1.2rem',color:'green'}}>Position</th>
          </tr>
          <tr>
            <td>AX-94572618</td>
            <td>591524581</td>
          </tr>
          <tr>
            <td>AX-94663690</td>
            <td>45354900</td>
          </tr>
          <tr>
            <td>AX-94998259</td>
            <td>555325353</td>
          </tr>
          <tr>
            <td>AX-94475556	</td>
            <td>586102229</td>
          </tr>
          <tr>
            <td>AX-94534637	</td>
            <td>517524441</td>
          </tr>
          <tr>
            <td>AX-94823460	</td>
            <td>86398896</td>
          </tr>
          <tr>
            <td>AX-94978875	</td>
            <td>25633098</td>
          </tr>
          <tr>
            <td>AX-95224988	</td>
            <td>547810743</td>
          </tr>
          <tr>
            <td>AX-94944591	</td>
            <td>157862189</td>
          </tr>
          <tr>
            <td>AX-94541833	</td>
            <td>3740808</td>
          </tr>
          <tr>
            <td>AX-94628115</td>
            <td>462228297</td>
          </tr>
          <tr>
            <td>AX-94981573	</td>
            <td>116377176</td>
          </tr>
        </table>
      </div>
    </div>

    </>
  )
}
export default Predict;