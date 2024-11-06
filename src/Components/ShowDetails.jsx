import React from "react";

export default function ShowDetails({ selectedItem }) {
  // Destructure the properties from selectedItem
  const {
    id,
    firstName,
    lastName,
    maidenName,
    age,
    address,
    bank,
    birthDate,
    bloodGroup,
    company,
    crypto,
    ein,
    email,
    eyeColor,
    gender,
    hair,
    height,
    image,
    ip,
    macAddress,
    phone,
    role,
    ssn,
    university,
    username,
    weight,
  } = selectedItem;

  return (
    <div>
      <h2>User Details</h2>
      <img src={image} alt={`${firstName} ${lastName}`} />
      <p>
        <strong>Name:</strong> {firstName} {lastName}{" "}
        {maidenName ? `(${maidenName})` : ""}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Address:</strong> {address.address}, {address.city},{" "}
        {address.state}, {address.stateCode} - {address.postalCode}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <p>
        <strong>Blood Group:</strong> {birthDate}
      </p>
      <p>
        <strong>University:</strong> {university}
      </p>
      <p>
        <strong>Blood Group:</strong> {bloodGroup}
      </p>
      <p>
        <strong>Eye Color:</strong> {eyeColor}
      </p>
      <p>
        <strong>Gender:</strong> {gender}
      </p>
      <p>
        <strong>Hair:</strong> {hair.color} ({hair.type})
      </p>
      <p>
        <strong>Height:</strong> {height} cm
      </p>
      <p>
        <strong>Weight:</strong> {weight} kg
      </p>
      <p>
        <strong>Role:</strong> {role}
      </p>
      <p>
        <strong>Company:</strong> {company.name} - {company.department} (
        {company.title})
      </p>
      <p>
        <strong>Bank:</strong> {bank.cardType} - {bank.cardNumber} (Expires:{" "}
        {bank.cardExpire})
      </p>
      <p>
        <strong>Crypto Wallet:</strong> {crypto.wallet} ({crypto.coin} on{" "}
        {crypto.network})
      </p>
      <p>
        <strong>IP Address:</strong> {ip}
      </p>
      <p>
        <strong>MAC Address:</strong> {macAddress}
      </p>
      <p>
        <strong>SSN:</strong> {ssn}
      </p>
      <p>
        <strong>EIN:</strong> {ein}
      </p>
      <p>
        <strong>Username:</strong> {username}
      </p>
    </div>
  );
}
