function firstTicket(Increase) {
  const ticketInput = document.getElementById("First-Class-ticket");
  const ticketCount = parseInt(ticketInput.value);
  //   const ticketNewCount = ticketCount + 1;
  let ticketNewCount = ticketCount;
  if (Increase == true) {
    ticketNewCount = ticketCount + 1;
  }
  if (Increase == false && ticketCount > 0) {
    ticketNewCount = ticketCount - 1;
  }

  document.getElementById("First-Class-ticket").value = ticketNewCount;

  claculateTotal();
}

function economyTicket(Decrease) {
  const ticketInput = document.getElementById("Economy-ticket");
  const ticketCount = parseInt(ticketInput.value);
  //   const ticketNewCount = ticketCount + 1;
  let ticketNewCount = ticketCount;
  if (Decrease == true) {
    ticketNewCount = ticketCount + 1;
  }
  if (Decrease == false && ticketCount > 0) {
    ticketNewCount = ticketCount - 1;
  }

  document.getElementById("Economy-ticket").value = ticketNewCount;

  claculateTotal();
}

function claculateTotal() {
  const ticketInput = document.getElementById("First-Class-ticket");
  const ticketCount = parseInt(ticketInput.value);

  const economyInput = document.getElementById("Economy-ticket");
  const economyCount = parseInt(economyInput.value);

  const subTotal = ticketCount * 150 + economyCount * 100;
  document.getElementById("sub-total").innerText = "$ " + subTotal;

  document.getElementById("popup-subtotal").innerText = "$" + subTotal;
  const tex = subTotal * 0.1;
  document.getElementById("tex").innerText = "$" + tex;

  document.getElementById("popup-tex").innerText = "$" + tex;
  const total = subTotal + tex;
  document.getElementById("total").innerText = "$" + total;
  document.getElementById("popup-total").innerText = "$" + total;
}

function displaypopup(isClose) {
  const mainPart = document.getElementById("main-part");
  if (isClose == true) {
    mainPart.style.display = "none";
  } else {
    mainPart.style.display = "block";
    window.location.reload();
  }

  const popupPart = document.getElementById("popup");
  if (isClose == true) {
    popupPart.style.display = "block";
  } else {
    popupPart.style.display = "none";
  }
  const datedeparture = document.getElementById("departure-date-part");
  const datepartdeparture = datedeparture.value;
  document.getElementById("departure").value = datepartdeparture;

  const datereturn = document.getElementById("return-date-part");
  const datepartreturn = datereturn.value;
  document.getElementById("return").value = datepartreturn;

  const FirstTicketValue = document.getElementById("First-Class-ticket");
  const datepartdeparture1 = FirstTicketValue.value;
  document.getElementById("First-Class").value = datepartdeparture1;

  const economyValue = document.getElementById("Economy-ticket");
  const datepartdeparture2 = economyValue.value;
  document.getElementById("Economy").value = datepartdeparture2;

  const fromGOValue = document.getElementById("fromGO");
  const sohag = fromGOValue.value;
 document.getElementById("showfromGo").innerHTML = sohag;
  
 const fromGOValue1 = document.getElementById("fromGO1");
 const sohag1 = fromGOValue1.value;
document.getElementById("showfromGo1").innerHTML = sohag1;
  
}


