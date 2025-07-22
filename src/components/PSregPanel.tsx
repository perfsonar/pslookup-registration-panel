import React from "react";
import { PanelProps } from "@grafana/data";
import { SimpleOptions } from "types";
import { css, cx } from "@emotion/css";
import { useStyles2 } from "@grafana/ui";
import { PanelDataErrorView } from "@grafana/runtime";
import "./App.css";
import { useState } from "react";
import LabeledInput from "./components/LabeledInput";
import LabeledSelect from "./components/LabeledSelect";
import LabeledCheckbox from "./components/LabeledCheckbox";
import LabeledInputWithChips from "./components/LabeledInputWithChips";
import regionOptions from "./data/regionOptions.json";
import node_policies from "./data/node_policies.json";

interface Props extends PanelProps<SimpleOptions> {}

const getStyles = () => {
  return {
    wrapper: css`
      font-family: Open Sans;
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
};

export const PSregPanel: React.FC<Props> = ({
  options,
  data,
  width,
  height,
  fieldConfig,
  id,
}) => {
  // const theme = useTheme2();
  const [isAgreed, setIsAgreed] = useState(false);
  const styles = useStyles2(getStyles);

  if (data.series.length === 0) {
    return (
      <PanelDataErrorView
        fieldConfig={fieldConfig}
        panelId={id}
        data={data}
        needsStringField
      />
    );
  }

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
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
          <LabeledInput label="City" id="city" placeholder="City" />
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
              All the information you provide on this page will be sent,
              recorded and made publicly available on the global perfSONAR
              Lookup Service. For privacy reasons, we recommend you use a role
              or group name and related email address to be registered. Any
              personal information you would provide will be on your own
              responsibility and will by no means represent an obligation for
              the perfSONAR project. See our&nbsp;
              <a
                href="https://www.perfsonar.net/about_privacy.html"
                className="PolicyLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>{" "}
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
            <span>Save</span>
            <img src="/icons/save.svg" alt="" className="SaveIcon" />
          </button>
          <button type="button" className="CancelButton">
            <span>Cancel</span>
            <img src="/icons/cancel.svg" alt="" className="CancelIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};
