function handleSubmit(event) {
  event.preventDefault();

  // get the url entered by user
  let url = document.getElementById("url").value;

  if(url.trim() == ""){
    alert("Please enter a valid url");
  }
  else{
  // get the api key from server
  fetch("/apiKey")
    .then((res) => res.json())
    .then(function (res) {
      const apiCall = `https://api.meaningcloud.com/sentiment-2.1?key=${res.application_key}&lang=auto&url=${url}`;
      Client.callApi(apiCall);
    });
  }
}

export { handleSubmit };
