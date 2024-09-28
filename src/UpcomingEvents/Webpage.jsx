import React from 'react';
import myImage from '../assets/images/milna.jpeg'; // Adjust the path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons'; // Import icons
import newImage from '../assets/images/hhehehe.jpeg'; // Add your new image path
import speakerImage from '../assets/images/amdar.jpeg'; // Add your speaker image path
import agendaImage1 from '../assets/images/image1.jpeg'; // Add agenda image path 1
import agendaImage2 from '../assets/images/image2.jpeg'; // Add agenda image path 2
import agendaImage3 from '../assets/images/image3.jpeg'; // Add agenda image path 3
import agendaImage4 from '../assets/images/image4.jpeg'; // Add agenda image path 4

const Webpage = () => {
  return (
    <div>
      <div style={{ marginLeft: '50px' }}>
        <div className="flex items-start mt-10">
          <img 
            src={myImage} 
            alt="Description of the image" 
            style={{ 
              width: '600px', 
              height: '400px', 
              marginLeft: '150px',
            }} 
          />
          <div style={{ 
            marginLeft: '50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            maxWidth: '600px',
          }}>
            <h3 className="text-xl font-bold mb-1" style={{ marginLeft: '20px', color: '#4F46E5' }}>
              Related Event
            </h3>
            <div style={{ height: '2px', backgroundColor: 'red', marginLeft: '20px', width: '70%' }} />
            
            {/* Original "15 Jan" Block */}
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
              <div 
                style={{ 
                  backgroundColor: '#4F46E5',
                  padding: '10px',
                  height: '80px',
                  width: '70px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  color: 'white',
                }}
              >
                <h2 className="text-3xl font-bold">15</h2>
                <span className="text-xl font-bold">Jan</span>
              </div>
              <div 
                style={{ 
                  marginLeft: '20px',
                  maxWidth: '200px',
                }}
              >
                <p style={{ fontSize: '14px', color: '#333', fontWeight: 'bold' }}>
                  Nobody can predict the future. You just have to give it a try.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <FontAwesomeIcon icon={faUser} style={{ fontSize: '16px', color: '#4F46E5', marginRight: '5px' }} />
                  <span style={{ fontWeight: 'bold', fontSize: '14px', color: '#333' }}>Speaker</span>
                  <span style={{ fontSize: '14px', color: '#333' }}> - Sameer Agam</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '16px', color: '#4F46E5', marginRight: '5px' }} />
                  <span style={{ fontWeight: 'bold', fontSize: '14px', color: '#333' }}>Location</span>
                  <span style={{ fontSize: '14px', color: '#333' }}> - Panvel</span>
                </div>
              </div>
            </div>

            {/* Cloned "15 Jan" Block Below the Original Block */}
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
              <div 
                style={{ 
                  backgroundColor: '#4F46E5',
                  padding: '10px',
                  height: '80px',
                  width: '70px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  color: 'white',
                }}
              >
                <h2 className="text-3xl font-bold">15</h2>
                <span className="text-xl font-bold">Jan</span>
              </div>
              <div 
                style={{ 
                  marginLeft: '20px',
                  maxWidth: '200px',
                }}
              >
                <p style={{ fontSize: '14px', color: '#333', fontWeight: 'bold' }}>
                  Nobody can predict the future. You just have to give it a try.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <FontAwesomeIcon icon={faUser} style={{ fontSize: '16px', color: '#4F46E5', marginRight: '5px' }} />
                  <span style={{ fontWeight: 'bold', fontSize: '14px', color: '#333' }}>Speaker</span>
                  <span style={{ fontSize: '14px', color: '#333' }}> - Sameer Agam</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '16px', color: '#4F46E5', marginRight: '5px' }} />
                  <span style={{ fontWeight: 'bold', fontSize: '14px', color: '#333' }}>Location</span>
                  <span style={{ fontSize: '14px', color: '#333' }}> - Panvel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* New Section for Icons Below the Image */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '30px', marginLeft: '150px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '50px' }}>
            <FontAwesomeIcon icon={faClock} style={{ fontSize: '24px', color: '#4F46E5', marginRight: '5px' }} />
            <span style={{ fontSize: '16px', color: '#333' }}>10:00 AM</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '50px' }}>
            <FontAwesomeIcon icon={faUser} style={{ fontSize: '24px', color: '#4F46E5', marginRight: '5px' }} />
            <span style={{ fontSize: '16px', color: '#333' }}>Sameer Agam</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '24px', color: '#4F46E5', marginRight: '5px' }} />
            <span style={{ fontSize: '16px', color: '#333' }}>Panvel</span>
          </div>
        </div>

        {/* Small Heading Below the Icons */}
        <h4 style={{ 
            marginLeft: '150px', 
            marginTop: '20px', 
            fontSize: '16px', 
            color: '#333', 
            textAlign: 'left',
            fontWeight: 'bold'
          }}>
          Political to change people’s poor help fund project in 2024...
        </h4>

        {/* Added Text Below the Heading */}
        <p style={{ 
            marginTop: '10px', 
            marginLeft: '150px', 
            marginRight: '400px',
            fontSize: '14px', 
            color: '#333',
            textAlign: 'left'
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Proin sed nisl at arcu aliquam tincidunt. Vestibulum vehicula, eros a feugiat gravida, lorem nisl consectetur elit, sit amet varius quam nisi id libero. Donec vestibulum diam eu lorem fringilla, id vehicula lacus venenatis. Nullam varius libero sed velit volutpat, non iaculis metus malesuada.
        </p>

        {/* Image Below the Text */}
        <img 
          src={newImage} 
          alt="Description of the new image" 
          style={{ 
            width: '900px', 
            height: '300px', 
            marginTop: '20px', 
            marginLeft: '150px'
          }} 
        />

        {/* "Know More Speaker" Section */}
        <h3 style={{ 
            marginLeft: '150px', 
            marginTop: '40px', 
            fontSize: '20px', 
            fontWeight: 'bold',
            textAlign: 'left'
          }}>
          Know More about the Speaker
        </h3>

        {/* Speaker Information */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '150px', marginTop: '20px' }}>
          <img 
            src={speakerImage} 
            alt="Speaker" 
            style={{ 
              width: '200px', 
              height: '200px', 
              borderRadius: '10px' 
            }} 
          />
          <div style={{ 
            marginLeft: '20px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'flex-start'
          }}>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
              Speaker Name
            </h4>
            <p style={{ fontSize: '14px', color: '#333' }}>
              Brief description about the speaker. This could include their background, expertise, and what they will discuss at the event.
            </p>
          </div>
        </div>

        {/* Agenda and Schedule Section Below the Speaker Information */}
        <h3 style={{ 
            marginLeft: '150px', 
            marginTop: '40px', 
            fontSize: '20px', 
            fontWeight: 'bold',
            textAlign: 'left'
          }}>
          Agenda and Schedule
        </h3>

        {/* Four Divs for Agenda Items */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginLeft: '150px', 
          marginTop: '20px', 
          width: '800px' 
        }}>
          <div style={{ 
            border: '1px solid #ccc', 
            borderRadius: '8px', 
            padding: '10px', 
            width: '380px',
            textAlign: 'center'
          }}>
            <img 
              src={agendaImage1} 
              alt="Agenda Item 1" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '8px', 
                marginBottom: '10px' 
              }} 
            />
            <h4 style={{ fontWeight: 'bold' }}>10:00 AM</h4>
            <p style={{ fontSize: '14px', color: '#333' }}>
              Opening Remarks
            </p>
          </div>
          <div style={{ 
            border: '1px solid #ccc', 
            borderRadius: '8px', 
            padding: '10px', 
            width: '380px',
            textAlign: 'center'
          }}>
            <img 
              src={agendaImage2} 
              alt="Agenda Item 2" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '8px', 
                marginBottom: '10px' 
              }} 
            />
            <h4 style={{ fontWeight: 'bold' }}>10:30 AM</h4>
            <p style={{ fontSize: '14px', color: '#333' }}>
              Keynote Address
            </p>
          </div>
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginLeft: '150px', 
          marginTop: '20px', 
          width: '800px' 
        }}>
          <div style={{ 
            border: '1px solid #ccc', 
            borderRadius: '8px', 
            padding: '10px', 
            width: '380px',
            textAlign: 'center'
          }}>
            <img 
              src={agendaImage3} 
              alt="Agenda Item 3" 
              style={{ 
                width: '100px', 
                height: '100px', 
                borderRadius: '8px', 
                marginBottom: '10px' 
              }} 
            />
            <h4 style={{ fontWeight: 'bold' }}>11:00 AM</h4>
            <p style={{ fontSize: '14px', color: '#333' }}>
              Panel Discussion
            </p>
          </div>
          <div style={{ 
            border: '1px solid #ccc', 
            borderRadius: '8px', 
            padding: '10px', 
            width: '380px',
            height: '380px',
            textAlign: 'center'
          }}>
            <img 
              src={agendaImage4} 
              alt="Agenda Item 4" 
              style={{ 
                width: '50px', 
                height: '100px', 
                borderRadius: '8px', 
                marginBottom: '10px' 
              }} 
            />
            <h4 style={{ fontWeight: 'bold' }}>12:00 PM</h4>
            <p style={{ fontSize: '14px', color: '#333' }}>
              Networking Session
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Webpage;