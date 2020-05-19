function segwit_3_of_4() {
    const pubkeys = [
        document.getElementById('3-of-4-key1').value,
        document.getElementById('3-of-4-key2').value,
        document.getElementById('3-of-4-key3').value,
        document.getElementById('3-of-4-key4').value
    ].map(hex => Buffer.from(hex, 'hex'));
    const { address } = bitcoin.payments.p2wsh({
        redeem: bitcoin.payments.p2ms({ m: 3, pubkeys }),
    });
    document.getElementById('result-3-of-4').innerHTML = address;
}

function p2sh_2_of_2() {
    const pubkeys = [
        document.getElementById('2-of-2-key1').value,
        document.getElementById('2-of-2-key2').value
    ].map(hex => Buffer.from(hex, 'hex'));
    const { address } = bitcoin.payments.p2sh({
        redeem: bitcoin.payments.p2wsh({
          redeem: bitcoin.payments.p2ms({ m: 2, pubkeys }),
        }),
      });
    document.getElementById('result-2-of-2').innerHTML = address;
}

function p2sh_2_of_3() {
    const pubkeys = [
        document.getElementById('2-of-3-key1').value,
        document.getElementById('2-of-3-key2').value,
        document.getElementById('2-of-3-key3').value
    ].map(hex => Buffer.from(hex, 'hex'));
    const { address } = bitcoin.payments.p2sh({
        redeem: bitcoin.payments.p2ms({ m: 2, pubkeys }),
      });
    document.getElementById('result-2-of-3').innerHTML = address;
}
