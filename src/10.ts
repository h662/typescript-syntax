interface IProfile2 {
  name: string;
  age: number;
  isRich?: boolean;
}

interface IJobProfile extends IProfile2 {
  job: string | null;
}

const fourProfile: IJobProfile = {
  name: "h662",
  age: 29,
  isRich: true,
  job: null,
};

console.log(fourProfile);
