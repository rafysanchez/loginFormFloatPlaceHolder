

$(document).ready(function()
{
    // Our code here
    $('.form li').find('input, textarea').on('keyup blur focus', function(e)
    {
     
        // Cache our selectors
        var $this = $(this),
            $parent = $this.parent();
     
        // Add or remove classes
        
            $('.form li').each(function(){
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label'); 
                } else {
                    $parent.removeClass('js-hide-label');   
                }
            })                   
       
    

    }
    )

});

