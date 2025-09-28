

// ------------------------------------------------
// 01. 부드러운 스크롤 (Lenis)
// ------------------------------------------------
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);





// 메인

// gsap.to(".right .glass", {
//   marginLeft: 0,
//   top: "0%",
//   scale: 1,
//   rotate: -30,
//   stagger:0.1
// });
gsap.timeline().from(".visual .title img", {
  marginLeft: 0,
  top: "0%",
  scale: 0.1,
  rotate: -530,
  stagger:0.1,
  opacity:0,
  duration:1,
  ease:'expo.inOut'
});


gsap.timeline().from(".glass", {
  marginLeft: -100,
  top: "50%",
  scale: 0.5,
  rotate: -60,
  stagger:0.2,
  opacity:0,
  ease:'expo.inOut'
});



// 01. 고정시킬거 선택 section_top
// let panels = gsap.utils.toArray(".section_top");
// let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

// panels.forEach((panel, i) => {
//     ScrollTrigger.create({
//         trigger: panel,
//         start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
//         pin: true, 
//         pinSpacing: false
//     })
// });
gsap.timeline({
  scrollTrigger: {
    trigger: ".section_top",
    start: "top top",
    pin:true,
    pinSpacing:false
  }
})

gsap.timeline({
  scrollTrigger: {
    trigger: ".butterfly",
    start: "10% top",
    end:"bottom top",
    scrub:true,
    
  }
}).to(".butterfly", {
  scale:0.3,
  y:-200,
});




// ------------------------------------------------
// Section 1
// ------------------------------------------------
gsap.timeline({
  scrollTrigger: {
    trigger: ".sec1",
    start: "top top",
    end: "20% top",
    scrub: true,
  }
}).to(".sec1", {
  backgroundColor:'#fff'
});



// ------------------------------------------------
// Section 2
// ------------------------------------------------
gsap.timeline({
  scrollTrigger: {
    trigger: ".sec2",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin:true,
    pinSpacing: true
  }
}).from(".sec2 .act li", {
  xPercent:150,
  stagger:0.5,
  ease: "easeOut",
  duration:10
});






gsap.timeline({
  scrollTrigger: {
    trigger: ".sec3 .project_1",
    start: "-100% top",
    end: "30% bottom",
    scrub: true,
  }
})
.to(".sec2", {
  backgroundColor:"#6e42a8",
  ease: "none"
})




// ------------------------------------------------
// Section 3
// ------------------------------------------------
// Project 1
gsap.timeline({
  scrollTrigger: {
    trigger: ".sec3 .project_1",
    start: "top 20%",
    end: "center 40%",
    scrub: true,
  }
})
.to(".project_1 .thema li", {
  backgroundColor:'#fff',
  stagger:1.5,
  duration:10,
  rotateY:360,
},'pro1')
.from(".sec3 .project_1 .bg_box", {
  x:500,
  duration:10,
  opacity:0,
  rotate:30
},'pro1');

// Project 1 → Project 2로 넘어갈 때 어둡게
gsap.timeline({
  scrollTrigger: {
    trigger: ".sec3 .project_2",
    start: "top 20%",
    end: "center 40%",
    scrub: true,
  }
})
.to(".project_2 .thema li", {
  backgroundColor:'#fff',
  stagger:1.5,
  duration:10,
  rotateY:360,
},'pro1')
.from(".sec3 .project_2 .bg_box", {
  x:-500,
  duration:10,
  opacity:0,
  rotate:-30
},'pro1');



gsap.timeline({
  scrollTrigger: {
    trigger: ".sec3 .project_2",   
    start: "top 80%",              
    end: "top 50%",                
    scrub: true,
  }
})
.to(".sec3 .project_1", {
  backgroundColor:"#6e42a8",
  duration:30,
  ease: "none"
})



gsap.timeline({
  scrollTrigger: {
    trigger: ".sec3 .project_3",
    start: "top 20%",
    end: "center 40%",
    scrub: true,
  }
})
.to(".project_3 .thema li", {
  backgroundColor:'#fff',
  stagger:1.5,
  duration:10,
  rotateY:360
},'pro1').from(".sec3 .project_3 .bg_box", {
  x:500,
  duration:10,
  opacity:0,
  rotate:30
},'pro1')


gsap.timeline({
  scrollTrigger: {
    trigger: ".sec3 .project_3",   
    start: "top 80%",              
    end: "top 50%",                
    scrub: true,
  }
})
.to(".sec3 .project_2,.sec3 .project_2 .project_bg", {
  backgroundColor:"#6e42a8",
  duration:30,
  ease: "none",
})





gsap.timeline({
  scrollTrigger: {
    trigger: ".sec3 .project_4",
    start: "top 20%",
    end: "center 40%",
    scrub: true,
  }
})
.to(".sec3 .project_3", {
  backgroundColor:"#6e42a8",
  duration:30,
  ease: "none"
}).to(".project_4 .thema li", {
  backgroundColor:'#fff',
  stagger:1.5,
  duration:10,
  rotateY:360
},'pro1').from(".sec3 .project_4 .bg_box", {
  x:-500,
  duration:10,
  opacity:0,
  rotate:-30
},'pro1')


gsap.timeline({
  scrollTrigger: {
    trigger: ".sec3 .project_4",   
    start: "top 80%",              
    end: "top 50%",                
    scrub: true,
  }
})
.to(".sec3 .project_3", {
  backgroundColor:"#6e42a8",
  duration:30,
  ease: "none",
  markers:true
})



// ------------------------------------------------
// 글씨조각 애니메이션
// ------------------------------------------------
gsap.utils.toArray(".concept").forEach(one => {
  // 각 concept 안의 p 선택
  let p = one.querySelector("p"); 
  let split1 = new SplitText(p, { type: "chars" });

  gsap.from(split1.chars, {
    y: 100,
    opacity: 0,
    stagger: 0.02,   // 글자 간 간격
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: one,
      start: "top 70%",
      toggleActions: "play none none reverse"
    }
  });
});




// $('.mockup').mouseover(function(){
//   let mockupScreen = $(this).height();
//   let mockupHeight = $(this).find('img').height();
//   $(this).find('img').css({top:(mockupScreen-mockupHeight)})
// }).mouseout(function(){
//   $(this).find('img').css({top:0})
// });

// 나비
const cursor = document.querySelector(".custom-cursor");
const targets = document.querySelectorAll(".sec4 .project_2 li");

// 마우스 따라다니기
document.addEventListener("mousemove", e => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});


// 각 li에 이벤트 연결
targets.forEach(li => {
  li.addEventListener("mouseenter", () => {
    cursor.style.opacity = 1;
  });

  li.addEventListener("mouseleave", () => {
    cursor.style.opacity = 0;
  });
});



$('.mockup').mouseover(function () {
    let img6Screen = $(this).height();            // mockup 박스 높이
    let img6Height = $(this).find('img').height(); // 이미지 실제 높이
    let moveY = img6Screen - img6Height;          // 올라가야 할 거리 (음수 값)

    // 거리 절댓값에 비례해서 시간 계산 (100px 이동 = 500ms 기준)
    let duration = Math.abs(moveY) / 100 * 200;   

    $(this).find('img').stop().animate({ top: moveY }, duration);
}).mouseout(function () {
    let img6Screen = $(this).height();
    let img6Height = $(this).find('img').height();
    let moveY = img6Screen - img6Height;

    let duration = Math.abs(moveY) / 100 * 500;

    $(this).find('img').stop().animate({ top: 0 }, 500);
});


//스크롤버전
/* window.addEventListener("load", () => {
  gsap.utils.toArray(".mockup").forEach(mockup => {
    let img = mockup.querySelector("img");

    let imgHeight = img.getBoundingClientRect().height;
    let parentHeight = mockup.getBoundingClientRect().height;
    let moveY = imgHeight - parentHeight;

    gsap.to(img, {
      y: moveY * 1.5,
      ease: "none",
      scrollTrigger: {
        trigger: mockup,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
  });
});
 */




gsap.timeline({
  scrollTrigger: {
    trigger: ".sec4 .project_2",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pinSpacing: true
  }
}).from(".posterImg", {
  scale:0.3,
  borderRadius:'500px'
})

// ------------------------------------------------
// Section 4
// ------------------------------------------------
gsap.timeline({
  scrollTrigger: {
    trigger: ".sec4 .project_1",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin:true,
    pinSpacing: true
  }
}).from(".project_1 .pro1_1", {
  xPercent:-150,
  ease: "easeOut",
},'pro1').from(".project_1 .pro1_2", {
  xPercent:150,
  ease: "easeOut",
},'pro1');



gsap.timeline({
  scrollTrigger: {
    trigger: ".sec4 .project_3",
    start: "top top",
    end: "center top",
    scrub: true,
    pin:true,
  }
}).from(".sec4 .project_3 li", {
  yPercent:80,
  opacity:0,
  duration:300,
  stagger:50,
  ease: "easeOut",
})



gsap.timeline({
  scrollTrigger: {
    trigger: ".sec4 .project_4",
    start: "-=500 top",
    end: "top top",
    scrub: true,
    // markers:true
  }
}).from(".sec4 .project_bg li div", {
  ease: "easeOut",
  y:100,
  stagger:0.5,
}).to(".sec4 .project_bg li div", {
  ease: "easeOut",
  y:100,
  stagger:0.5,
})



gsap.timeline({
  scrollTrigger: {
    trigger: "footer",
    start: "top top",
    end: "20% top",
    scrub: true,
  }
}).to("footer .end .thankyou", {
  scale:2
})



// ------------------------------------------------
// Section 5 project_tit
// ------------------------------------------------
// gsap.timeline({
//   scrollTrigger: {
//     trigger: ".sec4 .project_2",
//     start: "top top",
//     end: "bottom top",
//     scrub: true,
//     pin:true,
//     pinSpacing: true
//   }
// }).from(".project_1 .pro1_1 ", {
//   xPercent:-200
// },'pro1').from(".project_1 .pro1_2", {
//   xPercent:200
// },'pro1');









const glass = document.getElementById("glass"); // 드래그할 요소
const box = document.querySelector(".visual .centerbox"); // 부모 박스

let offsetX, offsetY, isDragging = false;

glass.addEventListener("mousedown", (e) => {
  e.preventDefault();
  isDragging = true;

  const boxRect = box.getBoundingClientRect();
  const glassRect = glass.getBoundingClientRect();

  // 마우스 클릭 지점과 glass의 상대적 위치 저장
  offsetX = e.clientX - glassRect.left;
  offsetY = e.clientY - glassRect.top;

  // 기존 CSS가 right/bottom 기반일 수도 있으니
  // 부모 기준 좌표로 left/top을 다시 잡아줌 (순간이동 방지)
  glass.style.left = (glassRect.left - boxRect.left) + "px";
  glass.style.top  = (glassRect.top - boxRect.top) + "px";
  glass.style.right = "auto";  // right/bottom 제거
  glass.style.bottom = "auto";
  glass.style.position = "absolute";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const boxRect = box.getBoundingClientRect();

  let x = e.clientX - boxRect.left - offsetX;
  let y = e.clientY - boxRect.top - offsetY;

  // 부모 박스 안에서만 이동 가능하도록 제한
  x = Math.max(0, Math.min(x, boxRect.width - glass.offsetWidth));
  y = Math.max(0, Math.min(y, boxRect.height - glass.offsetHeight));

  glass.style.left = x + "px";
  glass.style.top  = y + "px";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});


window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

