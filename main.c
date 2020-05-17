#define WASM_EXPORT __attribute__((visibility("default")))

WASM_EXPORT
double x = 0.01;
WASM_EXPORT
double y = 0;
WASM_EXPORT
double z = 0;
double a = 10;
double b = 28;
double c = 8.0 / 3.0;

WASM_EXPORT
void calcDerivadas () {
  double dt = 0.01;
  double dx = (a * (y - x)) * dt;
  double dy = (x * (b - z) - y) * dt;
  double dz = (x * y - c * z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;
}

int main() {
  return 42;
}

WASM_EXPORT
double getX() {
  return x;
}

WASM_EXPORT
double getY() {
  return y;
}

WASM_EXPORT
double getZ() {
  return z;
}
