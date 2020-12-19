import React from 'react';
import styled from 'styled-components';



const Title = styled.h1`
    color: #2291e6;
  
`;
function Committee() {
    return (
<div>
<Title>Commitees</Title><br />
<b>Program Committee Chairs </b><br />
<a href="http://ece-research.unm.edu/tsiropoulou/Students.html">Eirini Eleni Tsiropoulou</a> (University of New Mexico, USA) <br />
<a href="https://www.ece.ntua.gr/en/staff/76">Symeon Papavassiliou </a>(National Technical University of Athens, Greece)<br />

<br />
<b>Workshop Web Chairs </b> <br />
<a href="https://nafisirtija.github.io"> Nafis Irtija</a> (University of New Mexico, USA) <br />
<a href="https://sangoleyefisayo.github.io"> Fisayo Sangoleye</a> (University of New Mexico, USA) <br />

<br />
<b>Publicity Chairs </b> <br />
<a href="https://people.utwente.nl/s.bayhan?tab=about-me">Suzan Bayhan</a> (University of Twente, Netherlands) <br />

<br />
<b>Technical Program Committee </b><br />
Swades De (IIT, Delhi, India)<br />
R. K. Gosh (Department of EECS, IIT Bhilai) <br />
Rohit Kumar (University of Southern California, USA) <br />
Nathalie Mitton (INRIA, France) <br />
Jelena Misic (Ryerson University, Canada)<br />
Antonella Molinaro (Mediterranean University of Reggio Calabria, Italy)<br />
Amiya Nayak (University of Ottawa, Canada) <br />
Elena Pagani (Universita degli Studi di Milano, Italy) <br />
Athanasios Panagopoulos (National Technical University of Athens, Greece) <br />
Simone Silvestri (University of Kentucky, USA) <br />
Thrasyvoulos Spyropoulos (Institut Eurocom, France) <br />
Tuna Tugcu (Bogazici University, Turkey) <br />
Spyridon Vassilaras (Huawei Technologies, France)

</div>
    );
}

export default Committee;