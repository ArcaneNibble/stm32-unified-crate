# Unified STM32 device support crate

The goal of this project is to unify support for all STM32 parts into one crate
rather than a [huge](https://crates.io/crates/stm32f103xx)
[number](https://crates.io/crates/stm32f30x)
[of](https://crates.io/crates/stm32f0xx)
[separate](https://crates.io/crates/stm32f429x)
[crates](https://crates.io/crates/stm32f40x). In order to try to achieve this,
the original ST SVD files have been split up so that each peripheral is in its
own independent fragment file. These can then be mixed-and-matched and reused
across all product families. Unfortunately, it isn't possible for svd2rust to
actually generate a single crate supporting all devices, nor is it possible to
create a mega-crate that combines multiple svd2rust crates together. Issues
arise with things such as the global vector table. Therefore, currently this
crate is effectively a "meta-crate" that produces a tool that outputs a new
crate when it is run.

For example, to generate a crate for the STM32F405 device, use
```sh
./target/debug/stm32 stm32f405 >lib.rs
```

Note that "the point" of this repository is the maintenance of the files under
`svd/` and not the actual tool itself (which is just a thin wrapper around
svd2rust).

# Currently supported devices
* STM32F405/415/407/417
* STM32F427/437
* STM32F429/439

# Big thanks to
* [svd2rust](https://github.com/japaric/svd2rust)
* [libopencm3](https://github.com/libopencm3/libopencm3) for giving hints as to
  how peripherals are shared across product lines
