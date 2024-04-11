function generateIDCard() {
    let name = document.getElementById("studentIDname").value.trim();
    let idNumber = document.getElementById("stuentIDNumber").value.trim();
    let address = document.getElementById("studentIDaddress").value.trim();
    let funFact = document.getElementById("funFact").value.trim();
    
   
    if (name === '' && idNumber === '' && address === '' && funFact === '') {
      
      return;
    }
    
    let idCardContainer = document.createElement("div");
    idCardContainer.className = "StudentIdCard";
    
    let idCardContent = `
      <img src="./avatarPic.jpg" alt="avatar">
      <div>
        <h2>${name}</h2>
        <p>ID: ${idNumber}</p>
        <p>Address: ${address}</p>
        <p>Fun Fact: ${funFact}</p>
      </div>`;
    
    idCardContainer.innerHTML = idCardContent;
    
    let form = document.getElementById("inputForm");
    form.parentNode.insertBefore(idCardContainer, form.nextSibling);
    
    clearForm();
  }
  
  function clearForm() {
    document.getElementById("studentIDname").value = "";
    document.getElementById("stuentIDNumber").value = "";
    document.getElementById("studentIDaddress").value = "";
    document.getElementById("funFact").value = "";
  }

  function clearAllCards() {
    var idCards = document.querySelectorAll(".StudentIdCard");
    idCards.forEach(function(card) {
      card.remove();
    });
  }