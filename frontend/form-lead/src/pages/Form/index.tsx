import React, { FormEvent, useState } from "react";
import { Success } from "../Success";
import { AdditionalInformationSection } from "./Style/AdditionalInformationSection";
import { AddressSection } from "./Style/AddressSection";
import { Button } from "./Style/Button";
import { CheckBox } from "./Style/CheckBox";
import { ContactInformation } from "./Style/ContactInformation";
import { Content } from "./Style/Content";
import { Input } from "./Style/Input";
import { Row } from "./Style/Row";
import { RowFooter } from "./Style/RowFooter";
import { TitleSection } from "./Style/TitleSection";

const Form: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");

  const [BA_addressLine1, setBA_AddressLine1] = useState("");
  const [BA_addressLine2, setBA_AddressLine2] = useState("");
  const [BA_city, setBA_City] = useState("");
  const [BA_state, setBA_State] = useState("");
  const [BA_zipCode, setBA_ZipCode] = useState("");

  const [SA_addressLine1, setSA_AddressLine1] = useState("");
  const [SA_addressLine2, setSA_AddressLine2] = useState("");
  const [SA_city, setSA_City] = useState("");
  const [SA_state, setSA_State] = useState("");
  const [SA_zipCode, setSA_ZipCode] = useState("");

  const [info1, setInfo1] = useState(false);
  const [info2, setInfo2] = useState(false);
  const [info3, setInfo3] = useState(false);
  const [trackers, setTrackers] = useState("");
  const [send, setSend] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const bodyReq = {
      contact: {
        firstName,
        lastName,
        email,
        phone,
        country,
        language,
      },
      billingAddress: {
        addressLine1: BA_addressLine1,
        addressLine2: BA_addressLine2,
        city: BA_city,
        state: BA_state,
        zipCode: parseInt(BA_zipCode),
      },
      shippingAddress: {
        addressLine1: SA_addressLine1,
        addressLine2: SA_addressLine2,
        city: SA_city,
        state: SA_state,
        zipCode: parseInt(SA_zipCode),
      },
      additionalInformation: {
        info1: info1 ? 1 : 0,
        info2: info2 ? 1 : 0,
        info3: info3 ? 1 : 0,
        trackers: trackers,
      },
    };
    fetch(`${process.env.API_BASE}/new", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(bodyReq),
    })
      .then((res) => res.json())
      .then((data) => {
        setSend(true);
      })
      .catch(console.log);
  }
  function handleChange_SAEqualBA(event: any) {
    setSA_AddressLine1(BA_addressLine1);
    setSA_AddressLine2(BA_addressLine2);
    setSA_City(BA_city);
    setSA_State(BA_state);
    setSA_ZipCode(BA_zipCode);
    if (!event.target.checked) {
      setSA_AddressLine1("");
      setSA_AddressLine2("");
      setSA_City("");
      setSA_State("");
      setSA_ZipCode("");
    }
  }
  if (!send) {
    return (
      <form onSubmit={handleSubmit}>
        <Content>
          <div>
            <TitleSection>Contact Information:</TitleSection>
            <ContactInformation>
              <Input
                type="text"
                key="firstName"
                name="firstName"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="First Name:"
                minLength={3}
                maxLength={30}
              />
              <Input
                type="text"
                key="lastName"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                placeholder="Last Name:"
                minLength={3}
                maxLength={30}
              />
              <Input
                type="email"
                key="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email Address"
              />
              <Input
                type="number"
                key="phone"
                name="phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Phone:"
              />
              <Input
                type="text"
                key="language"
                name="language"
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                required
                placeholder="Language:"
                minLength={3}
                maxLength={30}
              />
              <Input
                type="text"
                key="country"
                name="country"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                placeholder="Country"
                minLength={3}
                maxLength={30}
              />
            </ContactInformation>
          </div>
          <div>
            <TitleSection>Shipping Address:</TitleSection>
            <AddressSection>
              <Input
                type="text"
                key="SA_addressLine1"
                name="SA_addressLine1"
                id="SA_addressLine1"
                value={SA_addressLine1}
                onChange={(e) => setSA_AddressLine1(e.target.value)}
                required
                placeholder="Address Line 1:"
                minLength={3}
              />
              <Input
                type="text"
                key="SA_addressLine2"
                name="SA_addressLine2"
                id="SA_addressLine2"
                value={SA_addressLine2}
                onChange={(e) => setSA_AddressLine2(e.target.value)}
                placeholder="Address Line 2:"
                minLength={3}
              />
              <Row>
                <Input
                  type="text"
                  key="SA_city"
                  name="SA_city"
                  id="SA_city"
                  value={SA_city}
                  onChange={(e) => setSA_City(e.target.value)}
                  required
                  placeholder="City"
                  minLength={3}
                />
                <Input
                  type="text"
                  key="SA_state"
                  name="SA_state"
                  id="SA_state"
                  value={SA_state}
                  onChange={(e) => setSA_State(e.target.value)}
                  required
                  placeholder="State:"
                  minLength={3}
                />
                <Input
                  type="number"
                  key="SA_zipCode"
                  name="SA_zipCode"
                  id="SA_zipCode"
                  value={SA_zipCode}
                  onChange={(e) => setSA_ZipCode(e.target.value)}
                  required
                  placeholder="ZIP Code:"
                  maxLength={10}
                />
              </Row>
            </AddressSection>
          </div>
          <div>
            <TitleSection>Billing Address:</TitleSection>
            <AddressSection>
              <Input
                type="text"
                key="BA_addressLine1"
                name="BA_addressLine1"
                id="BA_addressLine1"
                value={BA_addressLine1}
                onChange={(e) => setBA_AddressLine1(e.target.value)}
                required
                placeholder="Address Line 1:"
                minLength={3}
              />
              <Input
                type="text"
                key="A_addressLine2"
                name="BA_addressLine2"
                id="BA_addressLine2"
                value={BA_addressLine2}
                onChange={(e) => setBA_AddressLine2(e.target.value)}
                placeholder="Address Line 2:"
                minLength={3}
              />
              <Row>
                <Input
                  type="text"
                  key="BA_city"
                  name="BA_city"
                  id="BA_city"
                  value={BA_city}
                  onChange={(e) => setBA_City(e.target.value)}
                  required
                  placeholder="City"
                  minLength={3}
                />
                <Input
                  type="text"
                  key="BA_state"
                  name="BA_state"
                  id="BA_state"
                  value={BA_state}
                  onChange={(e) => setBA_State(e.target.value)}
                  required
                  placeholder="State:"
                  minLength={3}
                />
                <Input
                  type="number"
                  key="BA_zipCode"
                  name="BA_zipCode"
                  id="BA_zipCode"
                  value={BA_zipCode}
                  onChange={(e) => setBA_ZipCode(e.target.value)}
                  required
                  placeholder="ZIP Code:"
                  maxLength={10}
                />
              </Row>
              <Row>
                <CheckBox
                  id="SAEqualBA"
                  key="SAEqualBA"
                  name="SAEqualBA"
                  onChange={handleChange_SAEqualBA}
                />
                <label htmlFor="SAEqualBA">
                  Use shipping address same as billing address
                </label>
              </Row>
            </AddressSection>
          </div>
          <div>
            <TitleSection>Check the boxes below:</TitleSection>
            <AdditionalInformationSection>
              <div>
                <CheckBox
                  id="info1"
                  key="info1"
                  name="info1"
                  checked={info1}
                  onChange={(e) => setInfo1(e.target.checked)}
                />
                <label htmlFor="info1">
                  Does any vehicle need to be equipped with a fuel cut off
                  device?
                </label>
              </div>
              <div>
                <CheckBox
                  id="info2"
                  key="info2"
                  name="info2"
                  checked={info2}
                  onChange={(e) => setInfo2(e.target.checked)}
                />
                <label htmlFor="info2">
                  Will any tackers be installed on a bike, truck or machinery?
                </label>
              </div>
              <div>
                <CheckBox
                  id="info3"
                  key="info3"
                  name="info3"
                  checked={info3}
                  onChange={(e) => setInfo3(e.target.checked)}
                />
                <label htmlFor="info3">
                  Will you need to identify the fleet drivers?
                </label>
              </div>
              <Row>
                <Input
                  type="number"
                  key="trackers"
                  id="trackers"
                  name="trackers"
                  placeholder="How many trackers would you like to purchase"
                  value={trackers}
                  onChange={(e) => setTrackers(e.target.value)}
                />
              </Row>
            </AdditionalInformationSection>
          </div>
        </Content>
        <RowFooter>
          <Button type="submit">Order Now</Button>
        </RowFooter>
      </form>
    );
  } else {
    return (
      <Success>
        <p>
          Thank you for filling out this form, soon one of our agents will
          contact you.
        </p>
      </Success>
    );
  }
};
export default Form;
