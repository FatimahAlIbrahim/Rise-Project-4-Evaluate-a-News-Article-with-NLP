function callApi(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (res) {
      
      if (res.status.code == "0") {
        let scoreTag = res.score_tag;
        let agreement = res.agreement.toLowerCase();
        let subjectivity = res.subjectivity.toLowerCase();
        let irony = res.irony.toLowerCase();

        switch (scoreTag) {
          case "P+":
            scoreTag = "Strong Positive";
            break;
          case "P":
            scoreTag = "Positive";
            break;
          case "NEU":
            scoreTag = "Neutral";
            break;
          case "N":
            scoreTag = "negative";
            break;
          case "N+":
            scoreTag = "Strong Negative";
            break;
          case "NONE":
            scoreTag: "Without Polarity";
            break;
        }
        
        document.getElementById('polarity').innerHTML = scoreTag;
        document.getElementById('irony').innerHTML = irony;
        document.getElementById('agreement').innerHTML = agreement;
        document.getElementById('subjectivity').innerHTML = subjectivity;

      } else {
        alert("Please enter a valid url");
      }
    });
}

export { callApi };
