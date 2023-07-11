const legendTextSwitcher = name => {
  switch (name) {
    case 'yoga':
      return "Join Esther Howard, a skilled yoga instructor, for an invigorating and transformative experience. Discover the benefits of yoga at all levels - beginner, intermediate, and advanced. Strengthen your body, quiet your mind, and find inner peace. Don't miss out, sign up for Esther's yoga class today!";

    case 'fitness':
      return "Join Wade Warren, a certified fitness instructor, for a dynamic and challenging fitness class experience. Whether you're a beginner, intermediate, or advanced, Wade will help you reach your fitness goals. Burn calories, build strength, and transform your body. Don't miss out, sign up for Wade's fitness class today!";

    case 'zumba':
      return "Join Jane Cooper, a passionate Zumba instructor, for an electrifying and energizing workout. Experience the joy of dance and fitness at all levels - beginner, intermediate, and advanced. Burn calories, tone your body, and have fun. Don't wait, sign up for Jane's Zumba class today!";

    case 'boxing':
      return "Join Cameron Williamson, a skilled boxing instructor, for an exhilarating and empowering experience. Discover the art of boxing at all levels - beginner, intermediate, and advanced. Build strength, improve agility, and unleash your inner warrior. Don't wait, enroll in Cameron's boxing class today!";

    case 'crossfit':
      return "Join Leslie Alexander, a dedicated CrossFit instructor, for an intense and transformative workout. Push your limits and achieve your fitness goals at all levels - beginner, intermediate, and advanced. Increase strength, improve endurance, and experience the power of CrossFit. Don't hesitate, enroll in Leslie's class today!";

    default:
      return 'blah blah';
  }
};

export default legendTextSwitcher;
