# `setup-b-prolog`

This actions sets up a B-Prolog 8.1 environment for use in workflows.

![](https://github.com/logtalk-actions/setup-b-prolog/workflows/Test/badge.svg)

## Usage

See [action.yml](action.yml) for the action metadata. The action exports a `BPDIR` environment variable. The B-Prolog executable is available as `$BPDIR/bp`.

## Example

```yml
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Install B-Prolog backend
        uses: logtalk-actions/setup-b-prolog@master
      - name: Install Logtalk
        uses: logtalk-actions/setup-logtalk@master
        with:
          logtalk-version: latest
      - name: Checkout Logtalk application to be tested
        uses: actions/checkout@v1
      - name: Run all tests in the application directory
        run: |
          export PATH=$PATH:$BPDIR
          logtalk_tester -p b
```

## Contributing

Contributions are most welcome. Contributors are expected to uphold the [code of conduct](CODE_OF_CONDUCT.md).

## License

This project is released under the [Apache License 2.0](LICENSE).

## Current Status

This action is in active development. This action only supports Linux at this
time (the macOS package is 32 bit and thus incompatible with macOS 10.15 and
later versions).
