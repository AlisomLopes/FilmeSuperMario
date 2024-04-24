const mobile_button = document.getElementById('mobile_button');
const navigation = document.querySelector('.navigation_container');

function handleClick() 
{
    mobile_button.classList.toggle('active');
    navigation.classList.toggle('active');
}