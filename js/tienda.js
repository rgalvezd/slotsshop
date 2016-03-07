// filtrar primero por marca y despues por tipo

var allBrands = true;
var ninco = false;
var scalextric = false;
var slotit = false;
var otro = false;
var allTypes = true;
var coches = false;
var circuitos = false;

$(document).ready( function(){
    
    $( ":checkbox" ).click(function(){
        var id = $(this).attr('id');
        applyFilter($(this).attr('id'));
        setBrandBox();
        setTypeBox();
    });
    
    $(".anchor").click(function(){
        setTimeout( function(){loadAnchor()},100);
    });
    
    
    loadAnchor();
   
});

function loadAnchor(){
    allBrands = true;
    ninco = false;
    scalextric = false;
    slotit = false;
    otro = false;
    allTypes = true;
    coches = false;
    circuitos = false;
    
    var url = [];
    url = window.location.href.split("#");
    url.shift();
    if (url.length > 0) {
         url.forEach(function(element) {
            applyFilter(element);
        }, this);
    }
   setBrandBox();
   setTypeBox();
   setTimeout( function(){window.scrollTo(0, 0)}, 700);
   
}

function setBrandBox(){
    if(allBrands){
        $( '#brand-filter :checkbox' ).each( function(){$(this).prop( 'checked', false )});
        $( '#all-brands' ).prop('checked', true);
    } else{
        $( '#all-brands' ).prop('checked', false);
        $( '#ninco' ).prop('checked', ninco);
        $( '#scalextric' ).prop('checked', scalextric);
        $( '#slotit' ).prop('checked', slotit);
        $( '#otros' ).prop('checked', otro);
    }
    showByBrand();
}

function showByBrand(){
    if (allBrands) {
        $('.buy-item').fadeIn();
    } else{
        $('.buy-item').fadeOut();
        if (ninco) {
            $('.ninco').fadeIn();
        }
        if (scalextric) {
            $('.scalextric').fadeIn();
        }
        if (slotit) {
            $('.slotit').fadeIn();
        }
        if (otro) {
            $('.otro').fadeIn();
        }
    }
}

function setTypeBox(){
    if (allTypes) {
        $( '#type-filter :checkbox' ).each( function(){$(this).prop( 'checked', false )});
        $( '#all-types' ).prop('checked', true);
    }
    else if (coches) {
        $( '#type-filter :checkbox' ).each( function(){$(this).prop( 'checked', false )});
        $( "#coches" ).prop('checked', true);
    } else{
        $( '#type-filter :checkbox' ).each( function(){$(this).prop( 'checked', false )});
        $( '#circuitos' ).prop('checked', true);
    }
    showByType();
}

function showByType(){
    if (!allTypes) {
        if (coches) {
            
            $('.circuito').fadeOut();
        } else {
           
            $('.coche').fadeOut();
        }
    }
}

function applyFilter(url) {
   
    switch(url){
            case "all-types":
                allTypes = true;
                coches = false;
                circuitos = false; 
                break;
            case "coches":
                allTypes = false;
                coches = true;
                circuitos = false;         
                break;
            case "circuitos":
                allTypes = false;
                coches = false;
                circuitos = true;  
                break;
            case "all-brands":
                allBrands = true;
                ninco = false;
                scalextric = false;
                slotit = false;
                otro = false;
                break;
            case "ninco":
                allBrands = false;
                ninco = !ninco;
                break;
            case "scalextric":
                allBrands = false;
                scalextric = !scalextric;
                break;
            case "slotit":
                allBrands = false;
                slotit = !slotit;
                break;
            case "otros":
                allBrands = false;
                otro = !otro;
                break;
            default:
                break;
        }
        
        if (!ninco && !scalextric && !slotit && !otro) {
            allBrands = true;
        }
        
        if (ninco && scalextric && slotit && otro) {
            allBrands = true;
            ninco = false;
            scalextric = false;
            slotit = false;
            otro = false;
        }
        
}