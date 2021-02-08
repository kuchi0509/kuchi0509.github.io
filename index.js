var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

$(document).ready(function () {
    $("#MyModal").modal();
});

let expObject = [
    {
        designation: 'Community Lead',
        companyName: 'Developer Student Clubs',
        companyLogoURL: './img/communities/DSC.png',
        companyWebsiteURL: '',
        start: 'Aug 2020',
        end: 'Present',
        brief: 'Managing to launch and lead a university-based community group for students while delivering events on open-source and Google developer technologies to help them build their knowledge while building relationships, and demonstrating technologies with the help of community programs by Google Developer Relations team.'
    },
    {
        designation: 'Chairperson',
        companyName: 'Silver Oak Uni IEEE Student Branch',
        companyLogoURL: './img/main_photo.png',
        companyWebsiteURL: '',
        start: 'March 2020',
        end: 'Dec 2020',
        brief: 'Being the Head of Silver Oak University IEEE Student Branch, supervised all the community operations while managing and guiding a bunch of team leads, increasing the community presence by 400% and successfully delivering community programs for student developers.'
    },
    {
        designation: 'Organizer',
        companyName: 'GDG Cloud Ahmedabad',
        companyLogoURL: './img/communities/gdg_cloud_ahm.png',
        companyWebsiteURL: '',
        start: 'March 2019',
        end: 'Sept 2020',
        brief: 'Lead a community of Google Cloud professionals, delivered more than 15 community events, discussions, and conferences while setting-up various community programs and initiatives, managing communication and growing the community strength.'
    },
    {
        designation: 'Industry Relations Manager',
        companyName: 'IEEE India Council',
        companyLogoURL: './img/communities/IEEE_India_Council.png',
        companyWebsiteURL: '',
        start: 'March 2020',
        end: 'Dec 2020',
        brief: 'Achieved a leadership position in a national council of the world’s largest technical professional organization from 719 nominations while enabling community relations with industries to deliver community programs and campaigns at a great scale.'
    },
    {
        designation: 'ML Facilitator',
        companyName: 'Google AI | Explore ML',
        companyLogoURL: './img/communities/exploreml.png',
        companyWebsiteURL: '',
        start: 'July 2019',
        end: 'Jan 2020',
        brief: 'Advocated Google AI’s ML-Edu program, demonstrating Machine Learning & TensorFlow to 2000+ student developers while delivering mentorship and more than 10 events independently. While achieving a position on the Wall of Fame of Top contributors, designed and launched an MVP which was invited to receive Mentorship from Google Developer Experts & Google for Start-up Mentors.'
    }
];

let education = [
    {
        degree: 'Computer Engineering',
        institute: 'Silver Oak College of Engineering and Technology',
        start: '2017',
        end: 'Present'
    },
];

function stringResizer(str) {
    if (str.length > 20) {
        let temp = str.slice(0, 15) + '...';
        return temp;
    }
    else {
        return str;
    }
};

education.forEach((edu) => {
    document.getElementById('education-container').innerHTML +=
        `
    <div class="col-md-6 col-lg-4 col-sm-12 col-12 my-3">
        <div class="card">
            <div class="card-body px-1 py-3 align-items-center d-flex">                                                                                   
            <div class="m-2">    
                    <strong class="card-title py-0 my-0"> ${edu.degree}  </strong>
                    <p class="card-text text-muted"> ${edu.institute} 
                        <br> <small>${edu.start} - ${edu.end} </small> <br>
                    </p>                    
                </div>
            </div>
        </div>
    </div>
    `;
});

expObject.forEach((exp, index) => {
    document.getElementById('resume-container').innerHTML +=
        `<div class="col-md-6 col-lg-4 col-sm-12 col-12 my-3">
        <div class="card" data-toggle="modal" data-target="#a${index}"
            style="cursor: pointer;">
            <div class="card-body px-1 py-3 align-items-center d-flex">                                                                    
            <img class="float-start m-1" src="${exp.companyLogoURL}" alt=""
            loading="lazy" style="width: 30%; padding: 10px;">    
            <div class="m-2">    
                    <strong class="card-title py-0 my-0"> ${stringResizer(exp.designation)}  </strong>
                    <p class="card-text text-muted"> ${stringResizer(exp.companyName)} 
                        <br> <small>${exp.start} - ${exp.end} </small> <br>
                    </p>

                    <!-- Modal -->
                    <div class="modal fade" id="a${index}" tabindex="-1"
                        aria-labelledby="exampleModalLabel" aria-hidden="true"
                        role="dialog">
                        <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable"
                            role="document">
                            <div class="modal-content">
                                <div class="modal-body">
                                <div class="d-flex align-items-center">
                                
                                <img class="float-start m-1" src="${exp.companyLogoURL}" alt=""
                                loading="lazy" style="width: 20%; padding: 10px!important;">

                                <div>
                                    <h4 class="text-muted">
                                        ${exp.designation} |
                                        ${exp.companyName} </h4>
                                    <p> ${exp.start} - ${exp.end} </p>
                                    </div>
                                    </div>

                                    <p> ${exp.brief} </p>
                                </div>
                                <div class="modal-footer">
                                    <a href="${exp.companyWebsiteURL}" type="button"
                                        class="btn btn-outline-primary btn-sm">Learn
                                        More</a>
                                    <a class="btn btn-secondary btn-sm text-white"
                                        data-dismiss="modal" aria-label="Close">Close</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
})