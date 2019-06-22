import test from 'ava';
import execa from 'execa';
import bibleMaleNames from 'bible-male-names';

const fixureAll = bibleMaleNames.all.join('\n').trim();

test('Test --all', async t => {
	t.is(await execa.stdout('./cli.js', ['--all']), fixureAll);
});

test('Test random value', async t => {
	t.not(await execa.stdout('./cli.js'), bibleMaleNames.random());
});
