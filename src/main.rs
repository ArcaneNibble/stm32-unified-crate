include!(concat!(env!("OUT_DIR"), "/svd_bits.rs"));

fn main() {
    println!("Hello world!");

    for x in ALL_FRAGS {
        println!("{:?}", x);
    }
}
