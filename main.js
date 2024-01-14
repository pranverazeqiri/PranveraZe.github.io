function submitSurvey() {
    
    var favoriteSeason = document.querySelector('input[name="favoriteSeason"]:checked');
    var additionalComments = document.querySelector('textarea[name="additionalComments"]').value;

    console.log('Favorite Season:', favoriteSeason ? favoriteSeason.value : 'Not selected');
    console.log('Additional Comments:', additionalComments);

    alert('Survey submitted successfully!');
}







