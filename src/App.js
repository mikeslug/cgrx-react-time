import React, { useState } from "react";
import "./styles/scss/App.scss";
import EntryButton from "./components/EntryButton";
import QuantityButton from "./components/QuantityButton";
import { PageLayout } from "./components/PageLayout";
// import Container from "./components/Container";
import TimeEntry from "./components/TimeEntry";
import Spacer from "./components/Spacer";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { useMsal } from "@azure/msal-react";
// import { ProfileData } from "./components/ProfileData";
import { callMsGraph } from "./Graph";

function ProfileContent() {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);
  // const [manager, setManager] = useState(null);

  const name = accounts[0] && accounts[0].name;

  function RequestProfileData() {
    const request = {
      ...loginRequest,
      account: accounts[0],
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance
      .acquireTokenSilent(request)
      .then((response) => {
        callMsGraph(response.accessToken).then((response) =>
          setGraphData(response)
        );
      })
      .catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
          callMsGraph(response.accessToken).then((response) =>
            setGraphData(response)
          );
        });
      });
  }

  return (
    <>
      <h5 className="card-title">Welcome {name}</h5>
      {/* {graphData ? <ProfileData graphData={graphData} /> : RequestProfileData()} */}
      {graphData ? null : RequestProfileData()}
    </>
  );
}

function App() {
  const [formData, updateFormData] = useState([]);
  const [entryCount, updateEntryCount] = useState(0);
  function FormEntry(data) {
    updateEntryCount(entryCount + 1);
    updateFormData((formData) => [...formData, data]);
  }
  const handleRemoveItem = (e) => {
    const date = e.target.getAttribute("date");
    updateFormData(formData.filter((item) => item.date !== date));
  };
  return (
    <div className="App">
      <PageLayout>
        <AuthenticatedTemplate>
          <ProfileContent />
          <Spacer />
          <div className="form-buttons">
            <EntryButton handleEntry={FormEntry} />
            <QuantityButton />
          </div>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <p className="unauth-disclaimer">Please sign in.</p>
        </UnauthenticatedTemplate>
        <div className="entries-wrap">
          {formData.map((form, index) => (
            <TimeEntry
              key={index}
              index={index}
              count={entryCount}
              formData={form}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
        </div>
      </PageLayout>
    </div>
  );
}

export default App;
