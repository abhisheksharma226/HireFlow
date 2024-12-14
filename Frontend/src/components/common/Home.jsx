import React from 'react'
import Navbar from "../core/home/Nav"
import OutsourceInterviews from "../core/home/Mid"
import CallToAction from "../core/home/Customer"
import Testimonial from "../core/home/Review"
import InterviewRequest from "../core/home/Work"
import ExpertComponent from "../core/home/Map"
import CandidateReport from "../core/home/TIme"
import CandidateSolution from "../core/home/Solution"
import FAQs from "../core/home/Faq"
import Footer from "../core/home/Footer"


function Home() {
    return (
        <>
            <Navbar />
            <OutsourceInterviews />
            <CallToAction />
            <Testimonial />
            <InterviewRequest />
            <ExpertComponent />
            <CandidateReport />
            <CandidateSolution />
            <FAQs />
            <Footer />
        </>
    )
}

export default Home;
