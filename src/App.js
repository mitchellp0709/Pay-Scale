import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const basePay = 33.63;
  const MonFriPM = 33.88;
  const SunThuON = 39.88;
  const SatSunBase = 33.88;
  const SatSunPM = 39.88;
  const FriSatON = 40.88;


  const [weekOnePay,setWeekOnePay]= useState(0)
  const [weekOneHours, setWeekOneHours] = useState(1)
  const [weekTwoPay, setWeekTwoPay] = useState(0);
  const [weekTwoHours, setWeekTwoHours] = useState(1);

  const [sun1, setSun1] = useState({
    day: "Sunday",
    hours: 0,
    bonus:false
  })
const [mon1, setMon1] = useState({
  day: "Monday",
  hours: 0,
  bonus: false,
});
  const [tue1, setTue1] = useState({
    day: "Tuesday",
    hours: 0,
    bonus: false,
  });
  const [wed1, setWed1] = useState({
    day: "Wednesday",
    hours: 0,
    bonus: false,
  });
  const [thu1, setThu1] = useState({
    day: "Thursday",
    hours: 0,
    bonus: false,
  });
  const [fri1, setFri1] = useState({
    day: "Friday",
    hours: 0,
    bonus: false,
  });
  const [sat1, setSat1] = useState({
    day: "Sat",
    hours: 0,
    bonus: false,
  });



  const pay = (day, hours, bonus) => {
    let weekPay = 0;
  //sunday 12: 1042.52 or 478.56
  if (day === "sunday" || day === "Sunday") {
    const rate = {
      pay: SatSunPM,
      overtime: false,
      bonus: bonus,
      bonusGiven: false,
    };

    for (let i = 0; i < hours; i++) {
      if (i > 4) {
        rate.pay = SunThuON;
        rate.bonusGiven = false;
      }
      if (rate.bonus === true && rate.bonusGiven === false) {
        rate.pay += 47;
        rate.bonusGiven = true;
      }
      if (weekOneHours > 40 && rate.overtime == false) {
        rate.pay = rate.pay * 1.5;
        rate.overtime = true;
      }
      setWeekOnePay(weekOnePay+=rate.pay)
      //weekOnePay += rate.pay;
      setWeekOneHours(weekOneHours+=1)
      // weekOneHours++;
    }
  }

  if (
    day === "monday" ||
    day === "Monday" ||
    day === "tuesday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "wednesday" ||
    day === "Thursday" ||
    day === "thursday"
  ) {
    const rate = {
      pay: MonFriPM,
      overtime: false,
      bonus: bonus,
      bonusGiven: false,
    };

    for (let i = 0; i < hours; i++) {
      //1018.56 or 454.56
      if (i > 3) {
        rate.pay = SunThuON;
        rate.bonusGiven = false;
      }
      if (rate.bonus === true && rate.bonusGiven === false) {
        rate.pay += 47;
        rate.bonusGiven = true;
      }
      if (weekOneHours > 40 && rate.overtime == false) {
        rate.pay = rate.pay * 1.5;
        rate.overtime = true;
      }
      setWeekOnePay((weekOnePay += rate.pay));
      //weekOnePay += rate.pay;
      setWeekOneHours((weekOneHours += 1));
      // weekOneHours++;
    }
  }

  if (day === "friday" || day === "Friday") {
    const rate = {
      pay: MonFriPM,
      overtime: false,
      bonus: bonus,
      bonusGiven: false,
    };

    for (let i = 0; i < hours; i++) {
      if (i > 4) {
        rate.pay = FriSatON;
        rate.bonusGiven = false;
      }
      if (rate.bonus === true && rate.bonusGiven === false) {
        rate.pay += 47;
        rate.bonusGiven = true;
      }
      if (weekOneHours > 40 && rate.overtime == false) {
        rate.pay = rate.pay * 1.5;
        rate.overtime = true;
      }
      setWeekOnePay((weekOnePay += rate.pay));
      //weekOnePay += rate.pay;
      setWeekOneHours((weekOneHours += 1));
      // weekOneHours++;
    }
  }

  if (day === "saturday" || day === "Saturday") {
    const rate = {
      pay: SatSunPM,
      overtime: false,
      bonus: bonus,
      bonusGiven: false,
    };

    for (let i = 0; i < hours; i++) {
      if (i > 4) {
        rate.pay = FriSatON;
        rate.bonusGiven = false;
      }
      if (rate.bonus === true && rate.bonusGiven === false) {
        rate.pay += 47;
        rate.bonusGiven = true;
      }
      if (weekOneHours > 40 && rate.overtime == false) {
        rate.pay = rate.pay * 1.5;
        rate.overtime = true;
      }
      setWeekOnePay((weekOnePay += rate.pay));
      //weekOnePay += rate.pay;
      setWeekOneHours((weekOneHours += 1));
      // weekOneHours++;
    }
  }

  // setWeekOnePay(weekOnePay);
};







  return (
    <h1>pay</h1>
  );
}

export default App;
