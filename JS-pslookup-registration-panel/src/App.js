import './App.css';
import { useState } from 'react';
import LabeledInput from './components/LabeledInput';
import LabeledSelect from './components/LabeledSelect';
import LabeledCheckbox from './components/LabeledCheckbox';
import regionOptions from './data/regionOptions.json';
import node_policies from './data/node_policies.json'
import LabeledInputWithChips from './components/LabeledInputWithChips';

export default function MyApp() {

  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <div className="MainContainer">
      <div className="FormContainer">
        <LabeledInput
          label="Organization Name"
          id="orgname"
          placeholder="Enter Organization Name"
        />
        <LabeledInput
          label="Admin Name"
          id="admin_name"
          placeholder="Enter Administrator Name"
        />
        <LabeledInput
          label="Admin Email"
          id="admin_email"
          placeholder="Enter Administrator Email"
        />
        <LabeledInput
          label="City"
          id="city"
          placeholder="City"
        />
        <div className="LocationGroup"> 
          <LabeledSelect 
            label="Country" 
            id="country"  
            options={regionOptions}
          />
          <LabeledInput 
            label="State/Province" 
            id="state" 
            placeholder="State"
          />
          <LabeledInput 
            label="ZIP/Postal Code" 
            id="zip" 
            placeholder="ZIP Code" 
          />
        </div>
        <div className="CoordinateGroup"> 
          <LabeledInput 
            label="Latitude" 
            id="latitude" 
            placeholder="Latitude"
          />
          <LabeledInput 
            label="Longitude" 
            id="longitude" 
            placeholder="Longitude" 
          />
        </div>
        <div className="InputGroup">
            <div className="DividerWrapper">
              <div className="Divider" />
            </div>
          </div>
        <div className="SiteGroup"> 
          <LabeledInput 
            label="Sitename" 
            id="sitename" 
            placeholder="Enter Site Name"
          />
          <LabeledInput 
            label="Domain" 
            id="domain" 
            placeholder="Enter Domain" 
          />
        </div>
        <div className="NodeGroup"> 
          <LabeledInputWithChips
            label="Node Roles"
            id="node_role"
            placeholder="Press Enter to add Node Roles"
          />
          <LabeledSelect 
            label="Node Access Policy" 
            id="node_access_policy"  
            options={node_policies}
          />
        </div>
          <LabeledInput 
            label="Access Policy Notes" 
            id="access_notes" 
            placeholder="Enter Access Policy Notes"
          />
          <div className="InputGroup">
            <div className="DividerWrapper">
              <div className="Divider" />
            </div>
          </div> 
          <LabeledInputWithChips
            label="Communities"
            id="communities"
            placeholder="Press Enter to add Communities"
          />
          
          <div className="InputGroup">
            <div className="DividerWrapper">
              <div className="Divider" />
            </div>
          </div>
          <div className="InputGroup">
            <div className="PrivacyPolicy">
              All the information you provide on this page will be sent, recorded and made publicly available on the global perfSONAR Lookup Service. 
              For privacy reasons, we recommend you use a role or group name and related email address to be registered. 
              Any personal information you would provide will be on your own responsibility and will by no means represent an obligation for the perfSONAR project. 
              See our&nbsp;
              <a
                href="https://www.perfsonar.net/about_privacy.html"
                className="PolicyLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy 
              </a> {" "}
              for more information.
            </div>
        </div>

          <LabeledCheckbox
            id="agree"
            label="I agree to the perfSONAR Privacy Policy"
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
          />
      </div>
      <div className="ButtonBar">
        <button type="submit" className="SaveButton">
          <span>
            Save
          </span>
          <img src="/icons/save.svg" alt="" className="SaveIcon" />
        </button>
        <button type="button" className="CancelButton">
        <span>
          Cancel
        </span>
        <img src="/icons/cancel.svg" alt="" className="CancelIcon" />
      </button>
      </div>
    </div> 
  );
}
