//
// npm -- -t whatever
//
import ooStuff from './cities.js';

test('test the plumbing', () => {
    console.log("Hello from the plumbing department");
});

test('Does citySize work?', () => {
    
    let x = new ooStuff.City("Glasgow", 99999, 55, -135);
    let b = x.citySize();
    expect(b).toBe("Large town");

    let y = new ooStuff.City("Airdrie", 10000, 55, -135);
    let a = y.citySize();
    expect(a).toBe("Town");

let z = new ooStuff.City("Olds", 0, 55, -135);
    let c = z.citySize();
    expect(c).toBe("Ghost Town");
} )

test('Does whichHemisphere work?', () => {
    
    let x = new ooStuff.City("Glasgow", 99999, 55, -135);
    let b = x.whichHemisphere();
    expect(b).toBe("Northern Hemisphere");

    let y = new ooStuff.City("Airdrie", 10000, -45, -135);
    let a = y.whichHemisphere();
    expect(a).toBe("Southern Hemisphere");

let z = new ooStuff.City("Olds", 0, 0, -135);
    let c = z.whichHemisphere();
    expect(c).toBe("Equatorial");
} )
