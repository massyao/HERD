#define WASM_EXPORT __attribute__((visibility("default")))

WASM_EXPORT
#include <stdio.h>
#include <math.h>
int main(int param) {
  return param;
}
