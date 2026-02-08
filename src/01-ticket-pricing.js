/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  if(typeof age !== "number"|| age < 0){
    return -1;
  }
let price ;
let category;

 if(age <= 12){
  category= "child"
  price = 8;
  console.log(`category:${category},Age:${age}`);
 }
 else if(age <= 17){
  category= "Teens"
  price = 12;
  console.log(`category:${category},Age:${age}`);  
 }
 else if(age <= 59){
  category= "Adults"
  price = 15;
    console.log(`category:${category},Age:${age}`);
 }
 else{
  category= "seniors"
  price = 10
  console.log(`category:${category},Age:${age}`);
 }

 if(isWeekend === true){
  price += 3; 
  console.log(`Category: ${category} (Weekend surcharge applied)`);
 }
 else{
    console.log(`Category: ${category}`);
 }
   console.log(`Final Ticket Price: $${price}`);

 return price;
}
