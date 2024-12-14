import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-xl"><FaFacebook /></a>
            <a href="#" className="text-xl"><FaInstagram /></a>
            <a href="#" className="text-xl"><FaTwitter /></a>
            <a href="#" className="text-xl"><FaLinkedin /></a>
          </div>
          <div className="text-center">
            <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-full">Signup Now!</a>
            <p className="mt-2">Already working with top teams</p>
          </div>
          <button className="bg-green-500 text-white py-2 px-4 rounded-full">Book a demo</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Mission</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Slack Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Book a demo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Request a feature</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Our customers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Interview as a Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Profiles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Changelogs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Candidates Starter Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Case studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Glossary</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Job Description</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Product roadmap</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Solutions</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Startups</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">IT services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">IT staffing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Campuses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Coding Schools</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Use cases</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Accelerate tech hiring</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Standardized interviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cater to niche roles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Candidate experience</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Hiring analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Diversity & inclusion</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Mock interviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pair programming</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Ask pseudo code</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Reduce Rejection Ratio</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white">Campus recruitment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">System design interviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Product manager interviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Lateral hiring</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Campus hiring</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Frontend application development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Backend application development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Fullstack application development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Data Science-based application development</a></li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
