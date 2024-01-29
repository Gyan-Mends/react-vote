//importation of react router components
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './signup';
import Dashboard from './dashboard';
import Voters from './Voters';
import Candidates from './candidate';
import CandidatesDetails from './candidatesDetails';
import VotersDetails from './VotersDetails';
import ElectionDetails from './electionDetails';
import Election from './elections';
import Results from './results';
import ElectionEach from './electionEach';
import './index.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/Voters' element={<Voters/>}/>
        <Route path='/candidate' element={<Candidates/>}/>
        <Route path='/candidatesDetails' element={<CandidatesDetails/>}/>
        <Route path='/VotersDetails' element={<VotersDetails/>}/>
        <Route path='/electionDetails' element={<ElectionDetails/>}/>
        <Route path='/elections' element={<Election/>}/>
        <Route path='/results' element={<Results/>}/>
        <Route path='/electionEach' element={<ElectionEach/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);