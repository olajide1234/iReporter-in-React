export const imageAndTextBelowData = [
  {
    image: 'https://res.cloudinary.com/dqyytlxwe/image/upload/v1556088291/wallet.png',
    headerText: 'Corruption affects us all!',
    bottomText:
      'From poor healthcare services to low quality of education, corruption affects us all! Why not do something about it now?'
  },
  {
    image: 'https://res.cloudinary.com/dqyytlxwe/image/upload/v1556088301/bulb.png',
    headerText: 'Act now or it maybe too late!',
    bottomText:
      'Corruption is a monster that grows daily and threatens to consume us all. The more you delay to act, the bigger corruption becomes.'
  },
  {
    image: 'https://res.cloudinary.com/dqyytlxwe/image/upload/v1556088312/money.png',
    headerText: 'No pain, no gain!',
    bottomText:
      'Does it seem easier to keep quiet and just let that bribe pass? Think of our future, no pain now, no gain tomorrow.'
  }
];

export const homepageHeader = {
  header: 'Report injustice, corruption and neglect anywhere across Africa!',
  paragraph: `iReporter enables any/every citizen to bring any form of corruption
    to the notice of appropriate authorities and the general public. You
    can also report on things that need government intervention.`
};

export const signInPageHeader = {
  header: 'Report injustice, corruption and neglect anywhere across Africa!',
  paragraph: 'Sign in to iReporter'
};

export const signUpPageHeader = {
  header: 'Report injustice, corruption and neglect anywhere across Africa!',
  paragraph: 'Join the revolution now'
};

export const createRecordPageHeader = {
  paragraph: 'Posterity will thank you for this!'
};

export const signUpFormFields = [
  {
    className: 'container_formfield--text',
    type: 'text',
    placeholder: 'First name',
    buttonText: 'SIGN UP',
    bottomText: 'Already have an account?',
    bottomLinkText: ' Sign in',
    bottomLinkLocation: '/sign_in.html'
  },
  {
    className: 'container_formfield--text',
    type: 'text',
    placeholder: 'Last name'
  },
  {
    className: 'container_formfield--text',
    type: 'text',
    placeholder: 'Email'
  },
  {
    className: 'container_formfield--text',
    type: 'text',
    placeholder: 'Username'
  },
  {
    className: 'container_formfield--text',
    type: 'text',
    placeholder: 'Password'
  },
  {
    className: 'container_formfield--text',
    type: 'text',
    placeholder: 'Repeat password'
  }
];

export const signInFormFields = [
  {
    className: 'container_formfield--text',
    type: 'text',
    placeholder: 'Username',
    buttonText: 'SIGN IN',
    bottomText: 'New to iReporter?',
    bottomLinkText: ' Sign up',
    bottomLinkLocation: '/sign_up.html'
  },
  {
    className: 'container_formfield--text',
    type: 'password',
    placeholder: 'Password'
  }
];

export const createRecordFormFields = [
  {
    className: 'container_formfield--text',
    type: 'date',
    placeholder: 'Date of incident',
    buttonText: 'SUBMIT',
    bottomLinkLocation: '/sign_in.html'
  },
  {
    className: 'container_formfield--text',
    type: 'text',
    placeholder: 'Give a short title'
  },
  {
    className: 'container_formfield--text',
    type: 'text',
    placeholder: 'Tell us what happened'
  },
  {
    className: 'container_formfield--text',
    type: 'file',
    placeholder: 'Add an image'
  },
  {
    className: 'container_formfield--text',
    type: 'file',
    placeholder: 'Add a video'
  },
  {
    className: 'container_formfield--text',
    type: 'text',
    placeholder: 'Repeat password'
  }
];
