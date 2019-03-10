//code below based on sample code from scrollmagic site
$(function () { // wait for document ready
        //init
        var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 'onLeave'
            }
        });
    
         //get all slides
        var slides = document.querySelectorAll("section.panel");
    
         //create scene for each slide
        for (var i=0; i<slides.length; i++) {
            new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
            .setPin(slides[i])
            .addTo(controller);
        }

        //reworked chart code from chart js tutorial
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Avengers (1963 - 1996)", "Avengers (1996 - 1997)", "Avengers (1998 - 2004)", "Avengers (2010 - 2012)", "Avengers (2012 - 2015)", "Avengers (2016 - 2018)", "Avengers (2018 - Present)" ],
                datasets: [{
                    label: '# of Issues',
                    data: [403, 12, 90, 64, 122, 40, 17],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 255, 255, .2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 255, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });


          
}); 