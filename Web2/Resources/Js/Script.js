$(document).ready(
    function()
    {
        /*---stiacky*/

        $('.about-section').waypoint(
            function(direction)
            {
            if(direction == "down"){
              $('nav').addClass('sticky');
            }
            else{
              $('nav').removeClass('sticky');

                }
                
                
            $(direction).offset('600px')
                 
            }
            
        )
        /*-----------------scoling*/
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 800);
            event.preventDefault();
        });
    }
)