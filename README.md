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
        run: logtalk_tester -p b
```

## License

This project is released under the [Apache License 2.0](LICENSE).

## Current Status

This action is in active development. This action does not support Windows at this time.
